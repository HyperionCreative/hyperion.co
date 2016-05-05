<?php
$json_message = json_decode(file_get_contents('php://input'));

/////////////////////
// Parse form data //
/////////////////////
$name = isset($json_message->formData->name) ? $json_message->formData->name : '[no name]';
$help = isset($json_message->formData->help) ? $json_message->formData->help : '[no message]';
$contactBack = isset($json_message->formData->contactBack) ? $json_message->formData->contactBack : '[no contact method]';

///////////////////////////
// Parse navigation data //
///////////////////////////
$referrer = isset($json_message->navigationHistory->referrer) ? $json_message->navigationHistory->referrer : '[unknown]';
$statesName = (isset($json_message->navigationHistory->statesName) && is_array($json_message->navigationHistory->statesName)) ? $json_message->navigationHistory->statesName : array('[unknown]');

/////////////////////////
// Parse user location //
/////////////////////////
$city = isset($json_message->userLocation->city) ? $json_message->userLocation->city : '[unknown]';
$country = isset($json_message->userLocation->country) ? $json_message->userLocation->country : '[unknown]';

//////////////////////
// Format the email //
//////////////////////
$emailBody = sprintf(
    '<div style="color: #868d94; font-size: 13px;">' .
    '<div>' .
    '<span style="color: #202a35; font-size: 20px; font-weight: bold;">%1$s</span>' .
    '</div>' .
    '<br><br>' .
    '<div>%2$s</div>' .
    '<br>' .
    '<br><br>' .
    '<div>' .
    '<a style="color: #868d94; font-size: 13px; font-weight: bold;">%3$s</a>' . '<span> &#62; </span>' . '<span>%4$s</span>' .
    '</div>' .
    '<div>' .
    '<a style="color: #868d94; font-size: 13px;">%5$s</a>' . '<span> &#45; </span>' . '<span>%6$s, %7$s</span>' .
    '</div>' .
    '</div>',
    /* %1$s */
    $name,
    /* %2$s */
    nl2br($help),
    /* %3$s */
    $referrer,
    /* %4$s */
    implode(' / ', $statesName),
    /* %5$s */
    $contactBack,
    /* %6$s */
    $city,
    /* %7$s */
    $country
);

////////////////////
// Send the email //
////////////////////
function sendMail($subject, $body, $contactBack)
{
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: no-reply@hyperion.co<no-reply@hyperion.co>\r\nReply-To: $contactBack";

    mail('contact@hyperion.co', $subject, html_entity_decode($body), $headers);
    mail('cosmin@hyperion.co', $subject, html_entity_decode($body), $headers);
}

sendMail('New Lead - ' . $name . ' from ' . $country, $emailBody, $contactBack);
