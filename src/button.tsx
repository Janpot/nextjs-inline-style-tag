// Button.tsx
import * as React from "react";

const CSS = `
:root {
  --mauve-1: #121113;
  --mauve-2: #1a191b;
  --mauve-3: #232225;
  --mauve-4: #2b292d;
  --mauve-5: #323035;
  --mauve-6: #3c393f;
  --mauve-7: #49474e;
  --mauve-8: #625f69;
  --mauve-9: #6f6d78;
  --mauve-10: #7c7a85;
  --mauve-11: #b5b2bc;
  --mauve-12: #eeeef0;

  --indigo-1: #11131f;
  --indigo-2: #141726;
  --indigo-3: #182449;
  --indigo-4: #1d2e62;
  --indigo-5: #253974;
  --indigo-6: #304384;
  --indigo-7: #3a4f97;
  --indigo-8: #435db1;
  --indigo-9: #3e63dd;
  --indigo-10: #5472e4;
  --indigo-11: #9eb1ff;
  --indigo-12: #d6e1ff;

  --indigo-a1: #1133ff0f;
  --indigo-a2: #3354fa17;
  --indigo-a3: #2f62ff3c;
  --indigo-a4: #3566ff57;
  --indigo-a5: #4171fd6b;
  --indigo-a6: #5178fd7c;
  --indigo-a7: #5a7fff90;
  --indigo-a8: #5b81feac;
  --indigo-a9: #4671ffdb;
  --indigo-a10: #5c7efee3;
  --indigo-a11: #9eb1ff;
  --indigo-a12: #d6e1ff;

  --violet-1: #14121f;
  --violet-2: #1b1525;
  --violet-3: #291f43;
  --violet-4: #33255b;
  --violet-5: #3c2e69;
  --violet-6: #473876;
  --violet-7: #56468b;
  --violet-8: #6958ad;
  --violet-9: #6e56cf;
  --violet-10: #7d66d9;
  --violet-11: #baa7ff;
  --violet-12: #e2ddfe;

  --cyan-1: #0b161a;
  --cyan-2: #101b20;
  --cyan-3: #082c36;
  --cyan-4: #003848;
  --cyan-5: #004558;
  --cyan-6: #045468;
  --cyan-7: #12677e;
  --cyan-8: #11809c;
  --cyan-9: #00a2c7;
  --cyan-10: #23afd0;
  --cyan-11: #4ccce6;
  --cyan-12: #b6ecf7;

  --jade-1: #0d1512;
  --jade-2: #121c18;
  --jade-3: #0f2e22;
  --jade-4: #0b3b2c;
  --jade-5: #114837;
  --jade-6: #1b5745;
  --jade-7: #246854;
  --jade-8: #2a7e68;
  --jade-9: #29a383;
  --jade-10: #27b08b;
  --jade-11: #1fd8a4;
  --jade-12: #adf0d4;

  --red-1: #191111;
  --red-2: #201314;
  --red-3: #3b1219;
  --red-4: #500f1c;
  --red-5: #611623;
  --red-6: #72232d;
  --red-7: #8c333a;
  --red-8: #b54548;
  --red-9: #e5484d;
  --red-10: #ec5d5e;
  --red-11: #ff9592;
  --red-12: #ffd1d9;

  /* Aliases */

  --surface: var(--mauve-1);
  --panel: var(--mauve-2);
  --shadow-tint: 0 0% 0%;

  --gray-1: var(--mauve-1);
  --gray-2: var(--mauve-2);
  --gray-3: var(--mauve-3);
  --gray-4: var(--mauve-4);
  --gray-5: var(--mauve-5);
  --gray-6: var(--mauve-6);
  --gray-7: var(--mauve-7);
  --gray-8: var(--mauve-8);
  --gray-9: var(--mauve-9);
  --gray-10: var(--mauve-10);
  --gray-11: var(--mauve-11);
  --gray-12: var(--mauve-12);

  --primary-1: var(--violet-1);
  --primary-2: var(--violet-2);
  --primary-3: var(--violet-3);
  --primary-4: var(--violet-4);
  --primary-5: var(--violet-5);
  --primary-6: var(--violet-6);
  --primary-7: var(--violet-7);
  --primary-8: var(--violet-8);
  --primary-9: var(--violet-9);
  --primary-10: var(--violet-10);
  --primary-11: var(--violet-11);
  --primary-12: var(--violet-12);

  --secondary-1: var(--cyan-1);
  --secondary-2: var(--cyan-2);
  --secondary-3: var(--cyan-3);
  --secondary-4: var(--cyan-4);
  --secondary-5: var(--cyan-5);
  --secondary-6: var(--cyan-6);
  --secondary-7: var(--cyan-7);
  --secondary-8: var(--cyan-8);
  --secondary-9: var(--cyan-9);
  --secondary-10: var(--cyan-10);
  --secondary-11: var(--cyan-11);
  --secondary-12: var(--cyan-12);

  --success-1: var(--jade-1);
  --success-2: var(--jade-2);
  --success-3: var(--jade-3);
  --success-4: var(--jade-4);
  --success-5: var(--jade-5);
  --success-6: var(--jade-6);
  --success-7: var(--jade-7);
  --success-8: var(--jade-8);
  --success-9: var(--jade-9);
  --success-10: var(--jade-10);
  --success-11: var(--jade-11);
  --success-12: var(--jade-12);

  --error-1: var(--red-1);
  --error-2: var(--red-2);
  --error-3: var(--red-3);
  --error-4: var(--red-4);
  --error-5: var(--red-5);
  --error-6: var(--red-6);
  --error-7: var(--red-7);
  --error-8: var(--red-8);
  --error-9: var(--red-9);
  --error-10: var(--red-10);
  --error-11: var(--red-11);
  --error-12: var(--red-12);

  --surface: white;
  --panel: white;
  --shadow-black: 0 0% 0%;
  --shadow-tint: 215 22% 17%;

  /* Scales */

  --font-family-1: "graphik trial", -apple-system, BlinkMacSystemFont, helvetica,
    arial, sans-serif;
  --font-family-2: arial;
  --font-family-3: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 24px;
  --font-size-7: 28px;
  --font-size-8: 35px;
  --font-size-9: 60px;

  --line-height-1: 16px;
  --line-height-2: 20px;
  --line-height-3: 24px;
  --line-height-4: 26px;
  --line-height-5: 28px;
  --line-height-6: 30px;
  --line-height-7: 36px;
  --line-height-8: 40px;
  --line-height-9: 60px;

  --letter-spacing-1: 0.0025em;
  --letter-spacing-2: 0em;
  --letter-spacing-3: 0em;
  --letter-spacing-4: -0.0025em;
  --letter-spacing-5: -0.005em;
  --letter-spacing-6: -0.00625em;
  --letter-spacing-7: -0.0075em;
  --letter-spacing-8: -0.01em;
  --letter-spacing-9: -0.025em;

  --font-weight-1: 400;
  --font-weight-2: 500;
  --font-weight-3: 600;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;

  --radius-1: 2px;
  --radius-2: 4px;
  --radius-3: 8px;
  --radius-4: 12px;
  --radius-5: 16px;
  --radius-pill: 9999px;
  --radius-circle: 50%;

  --duration-1: 25ms;
  --duration-2: 50ms;
  --duration-3: 100ms;

  --shadow-1: 0 1px 1px 0 hsl(0, 0, 0, 0.05), 0 2px 1px -1px hsl(0, 0, 0, 0.05),
    0 1px 3px 0 hsl(0, 0, 0, 0.05);

  --shadow-4: 0 1px 1px 0px hsl(var(--shadow-tint) / 5%),
    0 1px 3px 0px hsl(var(--shadow-tint) / 5%),
    0 4px 8px 0px hsl(var(--shadow-tint) / 5%);

  --shadow-5: 0 1px 1px 0px hsl(var(--shadow-tint) / 5%),
    0 2px 6px -1px hsl(var(--shadow-tint) / 5%),
    0 6px 12px -3px hsl(var(--shadow-tint) / 5%),
    0 8px 16px -4px hsl(var(--shadow-tint) / 5%);

  --shadow-6: 0 1px 1px 0px hsl(var(--shadow-tint) / 5%),
    0 2px 4px -1px hsl(var(--shadow-tint) / 5%),
    0 4px 8px -2px hsl(var(--shadow-tint) / 5%),
    0 12px 32px -6px hsl(var(--shadow-tint) / 12%),
    0 20px 48px -10px hsl(var(--shadow-tint) / 5%);

  --shadow-9: hsl(var(--shadow-tint) / 15%) 0px 10px 32px,
    hsl(var(--shadow-black) / 5%) 0px 1px 1px,
    hsl(var(--shadow-tint) / 8%) 0px 4px 6px,
    hsl(var(--shadow-tint) / 10%) 0px 1px 1px,
    hsl(var(--shadow-tint) / 10%) 0 24px 68px;

  --cursor-button: default;
  --cursor-disabled: not-allowed;

  /* Font */

  --default-font-family: var(--font-family-1);
  --default-font-size: var(--font-size-3);
  --default-font-style: normal;
  --default-line-height: 1.5;
  --default-letter-spacing: 0em;
  --default-font-weight: var(--font-weight-1);
  --default-text-color: var(--gray-12);

  --heading-font-family: var(--default-font-family);
  --heading-font-size-adjust: 1;
  --heading-font-style: normal;
  --heading-letter-spacing: 0em;

  --strong-font-family: var(--default-font-family);
  --strong-font-size-adjust: 1;
  --strong-font-style: inherit;
  --strong-font-weight: var(--font-weight-3);
  --strong-letter-spacing: 0em;

  --em-font-family: "Times New Roman", "Times", serif;
  --em-font-size-adjust: 1.18;
  --em-font-style: italic;
  --em-font-weight: inherit;
  --em-letter-spacing: -0.025em;

  --code-font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  --code-font-size-adjust: 0.84;
  --code-font-style: normal;
  --code-font-weight: inherit;
  --code-letter-spacing: -0.007em;
  --code-padding-top: 0.12em;
  --code-padding-bottom: 0.12em;
  --code-padding-left: 0.24em;
  --code-padding-right: 0.24em;

  --button-typeface: var(--font-family-1);
  --button-weight: var(--font-weight-2);

  --button-size-1-h: var(--space-6);
  --button-size-1-fs: var(--font-size-1);
  --button-size-1-px: var(--space-3);
  --button-size-1-radius: var(--radius-pill);

  --button-size-2-h: var(--space-7);
  --button-size-2-fs: var(--font-size-2);
  --button-size-2-px: var(--space-4);
  --button-size-2-radius: var(--radius-pill);

  --button-size-3-h: var(--space-8);
  --button-size-3-fs: var(--font-size-3);
  --button-size-3-px: var(--space-5);
  --button-size-3-radius: var(--radius-pill);

  --button-variant-filled-bg: var(--primary-9);
  --button-variant-filled-bg--hover: var(--primary-10);
  --button-variant-filled-bg--active: var(--primary-11);
  --button-variant-filled-color: white;
  --button-variant-filled-shadow: none;
  --button-variant-filled-border-width: 0;
  --button-variant-filled-border-style: none;
  --button-variant-filled-border-color: none;
  --button-variant-filled-border-color--hover: none;
  --button-variant-filled-border-color--active: none;
}
.Button {
  all: unset;
  box-sizing: border-box;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  user-select: none;
  vertical-align: top;
  background-clip: padding-box;
  text-align: center;
  font-style: normal;
  font-family: var(--button-typeface);
  font-weight: var(--button-weight);
  cursor: var(--cursor-button);
}

/* Disabled */

.Button:disabled {
  cursor: var(--cursor-disabled);
}

/* Size */

.Button.size-1 {
  height: var(--button-size-1-h);
  font-size: var(--button-size-1-fs);
  padding-left: var(--button-size-1-px);
  padding-right: var(--button-size-1-px);
  border-radius: var(--button-size-1-radius);
  gap: 4px;
}

.Button.size-2 {
  height: var(--button-size-2-h);
  font-size: var(--button-size-2-fs);
  padding-left: var(--button-size-2-px);
  padding-right: var(--button-size-2-px);
  border-radius: var(--button-size-2-radius);
  gap: 8px;
}

.Button.size-3 {
  height: var(--button-size-3-h);
  font-size: var(--button-size-3-fs);
  padding-left: var(--button-size-3-px);
  padding-right: var(--button-size-3-px);
  border-radius: var(--button-size-3-radius);
  gap: 12px;
}

/* Filled */

.Button.variant-filled {
  color: var(--button-variant-filled-color);
  box-shadow: var(--button-variant-filled-shadow);
  border-width: var(--button-variant-filled-border-width);
  border-style: var(--button-variant-filled-border-style);
}

.Button.variant-filled.color-primary {
  background-color: var(--button-variant-filled-bg);
  border-color: var(--button-variant-filled-border-color);
}

.Button.variant-filled.color-primary:hover {
  background-color: var(--button-variant-filled-bg--hover);
  border-color: var(--button-variant-filled-border-color--hover);
}

.Button.variant-filled.color-primary:active {
  background-color: var(--button-variant-filled-bg--active);
  border-color: var(--button-variant-filled-border-color--active);
}

.Button.variant-filled.color-secondary {
  background-color: var(--secondary-9);
}

.Button.variant-filled.color-secondary:hover {
  background-color: var(--secondary-10);
}

.Button.variant-filled.color-secondary:active {
  background-color: var(--secondary-11);
}

.Button.variant-filled.color-success {
  background-color: var(--success-9);
}

.Button.variant-filled.color-success:hover {
  background-color: var(--success-10);
}

.Button.variant-filled.color-success:active {
  background-color: var(--success-11);
}

.Button.variant-filled.color-error {
  background-color: var(--error-9);
}

.Button.variant-filled.color-error:hover {
  background-color: var(--error-10);
}

.Button.variant-filled.color-error:active {
  background-color: var(--error-11);
}

.Button.variant-filled.color-gray {
  background-color: var(--gray-9);
}

.Button.variant-filled.color-gray:hover {
  background-color: var(--gray-10);
}

.Button.variant-filled.color-gray:active {
  background-color: var(--gray-11);
}

/* Outlined */

.Button.variant-outlined {
  border-width: 1px;
  border-style: solid;
}

.Button.variant-outlined.color-primary {
  border-color: var(--primary-9);
  color: var(--primary-11);
}

.Button.variant-outlined.color-primary:hover {
  background-color: var(--primary-2);
}

.Button.variant-outlined.color-primary:active {
  background-color: var(--primary-3);
}

.Button.variant-outlined.color-secondary {
  border-color: var(--secondary-9);
  color: var(--secondary-11);
}

.Button.variant-outlined.color-secondary:hover {
  background-color: var(--secondary-2);
}

.Button.variant-outlined.color-secondary:active {
  background-color: var(--secondary-3);
}

.Button.variant-outlined.color-success {
  border-color: var(--primary-9);
  color: var(--primary-11);
}

.Button.variant-outlined.color-success:hover {
  background-color: var(--primary-2);
}

.Button.variant-outlined.color-success:active {
  background-color: var(--primary-3);
}

.Button.variant-outlined.color-error {
  border-color: var(--error-9);
  color: var(--error-11);
}

.Button.variant-outlined.color-error:hover {
  background-color: var(--error-2);
}

.Button.variant-outlined.color-error:active {
  background-color: var(--error-3);
}

.Button.variant-outlined.color-gray {
  border-color: var(--gray-9);
  color: var(--gray-11);
}

.Button.variant-outlined.color-gray:hover {
  background-color: var(--gray-2);
}

.Button.variant-outlined.color-gray:active {
  background-color: var(--gray-3);
}

/* Text */

.Button.variant-text.color-primary {
  color: var(--primary-11);
}

.Button.variant-text.color-primary:hover {
  background-color: var(--primary-4);
}

.Button.variant-text.color-primary:active {
  background-color: var(--primary-5);
}

.Button.variant-text.color-secondary {
  color: var(--secondary-11);
}

.Button.variant-text.color-secondary:hover {
  background-color: var(--secondary-4);
}

.Button.variant-text.color-secondary:active {
  background-color: var(--secondary-5);
}

.Button.variant-text.color-success {
  color: var(--success-11);
}

.Button.variant-text.color-success:hover {
  background-color: var(--success-4);
}

.Button.variant-text.color-success:active {
  background-color: var(--success-5);
}

.Button.variant-text.color-error {
  color: var(--error-11);
}

.Button.variant-text.color-error:hover {
  background-color: var(--error-4);
}

.Button.variant-text.color-error:active {
  background-color: var(--error-5);
}

.Button.variant-text.color-gray {
  color: var(--gray-11);
}

.Button.variant-text.color-gray:hover {
  background-color: var(--gray-4);
}

.Button.variant-text.color-gray:active {
  background-color: var(--gray-5);
}

/* Focus */

.Button:focus-visible {
  outline-width: 2px;
  outline-style: solid;
  outline-offset: 2px;
  outline-color: black;
}

/* Just messing */

.Button span {
  background-color: hsl(0 0% 100% / 20%);
  border-radius: 9999px;
  padding: 3px 6px;
  font-size: 0.85em;
}
`;

const Button = React.forwardRef<
  HTMLButtonElement,
  React.JSX.IntrinsicElements["button"]
>(({ className, ...rest }, forwardedRef) => {
  return (
    <>
      <style href="button" precedence="components">
        {CSS}
      </style>
      <button
        {...rest}
        ref={forwardedRef}
        className={`reset Button variant-filled color-primary ${
          className ?? ""
        }`}
      />
    </>
  );
});
Button.displayName = "Button";

export { Button };
