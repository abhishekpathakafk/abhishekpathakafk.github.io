import React from "react";
import './Typewriter.css';
export function TypeWriter(style?:React.CSSProperties) {
  return (
    <div style={style}>
      This is TypeWriter 
    </div>
  );
}

export function TypeWriterHelp(style?:React.CSSProperties) {
return (
    <div className="typewriter-help-page">
      <h1>Typewriter Plugin: Help & Usage</h1>
      <p>This guide will walk you through the steps to create bitmap fonts using the Typewriter plugin for Adobe Photoshop.</p>

      <section>
        <h2>Getting Started</h2>
        <p>The Typewriter plugin allows you to convert your Photoshop text layers, complete with applied layer effects, into a bitmap font atlas and a corresponding <code>.fnt</code> file.</p>
      </section>

      <section>
        <h3>Step 1: Prepare Your Text Layer in Photoshop</h3>
        <p><strong>Before launching the plugin, ensure you have a text layer selected in your Photoshop document.</strong> This text layer should have the desired font and any layer effects you wish to include in your bitmap font.</p>
        <p><strong>Important Note:</strong> The font used in your text layer must be installed on your system for the plugin to function correctly.</p>
        <div className="image-container">
          <img src="Step1.png" alt="Step 1: Photoshop document with text layer selected" />
          <p className="image-caption">Image: Step1.png - Shows a Photoshop document with a text layer and layer effects, and the Layers panel with the text layer selected.</p>
        </div>
      </section>

      <section>
        <h3>Step 2: Generate Your Bitmap Atlas</h3>
        <ol>
          <li>With your text layer selected, open the Typewriter plugin.</li>
          <li>In the plugin interface, set the <strong>Font Size</strong> for your bitmap font. This will determine the size of the glyphs in your atlas.</li>
          <li>Click the <strong>"Generate"</strong> button.</li>
        </ol>
        <p>The plugin will then open a new Photoshop document and create a bitmap atlas based on your selected text layer's properties.</p>
        <div className="image-container">
          <img src="Step2.jpg" alt="Step 2: Typewriter plugin interface and generated bitmap atlas" />
          <p className="image-caption">Image: Step2.jpg - Shows the Typewriter plugin interface with Font Size set and the "Generate" button, along with the newly generated bitmap atlas in a Photoshop document.</p>
        </div>
      </section>

      <section>
        <h3>Step 3: Adjust Atlas Settings (Optional)</h3>
        <p>After generating the initial bitmap, you can fine-tune its layout using the atlas settings within the Typewriter plugin:</p>
        <ul>
          <li><strong>Padding:</strong> Adjusting this value will change the individual glyph size. You can visualize the glyph boundaries by enabling the "Draw Debug Boxes" option (shown in green in the example).</li>
          <li><strong>Spacing:</strong> This setting controls the space between different glyphs in your atlas.</li>
          <li><strong>Border Padding:</strong> This option adds padding around the entire canvas of your bitmap atlas.</li>
        </ul>
        <div className="image-container">
          <img src="Step3.jpg" alt="Step 3: Adjusting atlas settings" />
          <p className="image-caption">Image: Step3.jpg - Shows the Typewriter plugin interface with Padding and Spacing settings adjusted, and the debug boxes visible on the bitmap atlas.</p>
        </div>
      </section>

      <section>
        <h3>Step 4: Export Your Font Files</h3>
        <p>Once you are satisfied with the visual appearance of your bitmap atlas, proceed to export your font files:</p>
        <ol>
          <li>Click the <strong>"Load TTF/OTF File"</strong> button.</li>
          <li>Navigate to and select the original font file (<code>.ttf</code> or <code>.otf</code>) that you used for your text layer.</li>
          <li>In the provided input field, enter the desired name for your exported files (e.g., "samplefont").</li>
          <li>The <strong>"Export"</strong> button should now become active. Click it.</li>
          <li>A file browser window will appear. Select the folder where you want to save your exported files.</li>
        </ol>
        <p><strong>Voila!</strong> You will receive two files in your chosen directory:</p>
        <ul>
          <li>A <strong><code>.png</code> file</strong>: This is your bitmap font atlas containing all the generated glyphs.</li>
          <li>A <strong><code>.fnt</code> file</strong>: This is the font definition file that accompanies your bitmap atlas, providing information about each glyph's position and size.</li>
        </ul>
        <div className="image-container">
          <img src="Step4.png" alt="Step 4: Exported font files" />
          <p className="image-caption">Image: Step4.png - Shows a file explorer window with the exported <code>samplefont.fnt</code> and <code>samplefont.png</code> files.</p>
        </div>
      </section>

      <section>
        <h3>Using Your Exported Font</h3>
        <p>You can now utilize the generated <code>.png</code> and <code>.fnt</code> files in your applications or projects that support bitmap fonts, allowing you to render text with the exact style and effects from your Photoshop text layer.</p>
        <div className="image-container">
          <img src="Step5.png" alt="Using the exported font" />
          <p className="image-caption">Image: Step5.png - Shows an example of text rendered using the exported bitmap font, demonstrating its appearance.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Need Further Assistance?</h2>
        <p>If you have any questions, feedback, or require further assistance, please feel free to contact us:</p>
        <p>Email: <a href="mailto:abhi.pathak401@gmail.com">abhi.pathak401@gmail.com</a></p>
      </section>
    </div>
  );
}
export function TypeWriterTOS(style?:React.CSSProperties) {

  return (
<div style={{ padding: "2rem", maxWidth: "800px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1>Terms of Service</h1>
      <p>Last updated: June 10, 2025</p>

      <h2>Acceptance of Terms</h2>
      <p>
        By using this Adobe Photoshop plugin, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the plugin.
      </p>

      <h2>License</h2>
      <p>
        This plugin is provided free of charge and may be used for both personal and commercial purposes within Adobe Photoshop. Redistribution or resale is not permitted without the author's written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        The plugin is provided “as is” without warranty of any kind. In no event shall the developer be liable for any damages arising from the use or inability to use the plugin.
      </p>

      <h2>Modifications</h2>
      <p>
        The developer reserves the right to update or modify the plugin or these terms at any time without prior notice. Continued use of the plugin after any changes constitutes acceptance of the updated terms.
      </p>

      <h2>Support</h2>
      <p>
        This plugin is provided as-is, without guaranteed support. For bug reports or questions, you may contact <strong>abhi.pathak401@gmail.com</strong>.
      </p>
    </div>
  );
}
export function TypeWriterPrivacy(style?:React.CSSProperties) {

  return (
 <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: June 10, 2025</p>

      <h2>Introduction</h2>
      <p>
        This Photoshop plugin is developed and distributed by Abhishek Pathak. This plugin is provided as a free tool to enhance your creative workflow within Adobe Photoshop.
      </p>

      <h2>Data Collection</h2>
      <p>
        This plugin does not collect, store, transmit, or share any personal or non-personal user data. It operates entirely within your local Photoshop environment.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The plugin does not use or integrate with any third-party services or APIs that collect user data.
      </p>

      <h2>Cookies</h2>
      <p>
        This plugin does not use cookies or any similar tracking technologies.
      </p>

      <h2>User Rights</h2>
      <p>
        Since the plugin does not collect or store any information, there is no personal data to access, modify, or delete.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions or concerns about this privacy policy, feel free to contact me at <strong>abhi.pathak401@gmail.com</strong>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This policy may be updated occasionally. Any changes will be reflected on this page with the updated date.
      </p>
    </div>
  );
}