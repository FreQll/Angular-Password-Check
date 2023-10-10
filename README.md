# Angular Password Check

The essence of the project:

Field for entering a password, under the field 3 sections which will show the strength of the password;
Changes in password strength take place in real time;

*How the strength of a password is calculated*:

<ul>
  <li>Only letters/digits/symbols - the password is easy</li>
  <li>Combination of letters-symbols/letters-digits/digits-symbols - the password is medium</li>
  <li>Has letters, symbols and numbers - the password is strong</li>
</ul>

*The color of the sections will depend on the strength of the password*:
<ol>
  <li>If the field is empty, all sections are gray;</li>
  <li>If the field has less than 8 characters, all sections are red;</li>
  <li>If the password is easy - the first section is red the rest are gray;</li>
  <li>If the password is medium - the first two sections are yellow the last one is gray;</li>
  <li>If the password is strong, all sections are green;</li>
</ol>

