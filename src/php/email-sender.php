<?php
  $json = file_get_contents('php://input');
  $obj = json_decode($json);

  /////////////////////
  // Parse form data //
  /////////////////////
  $name; $help; $contactBack; $budget; $company;

  if (isset($obj->formData->name)) { $name = $obj->formData->name; } else { $name = '[no name]'; };
  if (isset($obj->formData->help)) { $help = $obj->formData->help; } else { $help = '[no message]'; };
  if (isset($obj->formData->contactBack)) { $contactBack = $obj->formData->contactBack; } else { $contactBack = '[no contact method]'; };
  if (isset($obj->formData->budget)) { $budget = $obj->formData->budget; } else { $budget = '[unspecified]'; };
  if (isset($obj->formData->company)) { $company = $obj->formData->company; } else { $company = '[unspecified]'; };

  ///////////////////////////
  // Parse navigation data //
  ///////////////////////////
  $referrer; $statesName;

  if (isset($obj->navigationHistory->referrer)) { $referrer = $obj->navigationHistory->referrer; } else { $referrer = '[unknown]'; };
  if (isset($obj->navigationHistory->statesName) && is_array($obj->navigationHistory->statesName)) { $statesName = $obj->navigationHistory->statesName; } else { $statesName = array('[unknown]'); };

  /////////////////////////
  // Parse user location //
  /////////////////////////
  $city; $country;

  if (isset($obj->userLocation->city)) { $city = $obj->userLocation->city; } else { $city = '[unknown]'; };
  if (isset($obj->userLocation->country)) { $country = $obj->userLocation->country; } else { $country = '[unknown]'; };

  //////////////////////
  // Format the email //
  //////////////////////
  $emailBody = sprintf(
    '<div style="color: #868d94; font-size: 13px;"><div><span style="color: #202a35; font-size: 20px; font-weight: bold;">%s</span><span> &#64; </span><span style="color: #2d3a3f; font-size: 16px;">%s</span></div><br><br><div>%s</div><br><div>Budget: <span>%s</span></div><br><br><div><a style="color: #868d94; font-size: 13px; font-weight: bold;">%s</a><span> &#62; </span><span>%s</span></div><div><a style="color: #868d94; font-size: 13px;">%s</a><span> &#45; </span><span>%s, %s</span></div></div>',
    $name,
    $company,
    nl2br($help),
    $budget,
    $referrer,
    implode(' / ', $statesName),
    $contactBack,
    $city,
    $country
  );

  ////////////////////
  // Send the email //
  ////////////////////
  function sendMail($subject, $body) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= 'From: no-reply@hyperion.co<no-reply@hyperion.co>' . "\r\n" . 'Reply-To:no-reply@hyperion.co';

    mail('contact@hyperion.co', $subject, html_entity_decode($body), $headers);
  }

  sendMail('New Lead - ' . $name . ' from ' . $country, $emailBody);
?>
