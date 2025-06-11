import React from "react";
import './Typewriter.css';
export function TypeWriter(style?:React.CSSProperties) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <script src="https://unpkg.com/lucide-react@0.395.0/dist/umd/lucide-react.min.js"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 1em; /* Adjust as needed */
            height: 1em; /* Adjust as needed */
          }
        `}
      </style>

      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Typewriter Plugin</h1>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 text-center rounded-b-lg shadow-lg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Bring Your Photoshop Text to Life with Typewriter
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform text layers with effects into stunning bitmap fonts effortlessly.
          </p>
          <a
            href="#features"
            className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg"
          >
            Discover Features
          </a>
        </div>
      </section>

      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-blue-500">
              <div className="mb-4 text-blue-600">
                <img
                  src="https://placehold.co/100x100/A7F3D0/10B981?text=Effects"
                  alt="Layer Effects Icon"
                  className="mx-auto h-24 w-24 mb-4 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Preserve Layer Effects</h3>
              <p className="text-gray-600">
                Automatically convert Photoshop text layers, including all applied layer effects, into a ready-to-use bitmap font.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-indigo-500">
              <div className="mb-4 text-indigo-600">
                <img
                  src="https://placehold.co/100x100/BFDBFE/2563EB?text=Atlas"
                  alt="Atlas Icon"
                  className="mx-auto h-24 w-24 mb-4 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customizable Atlas Generation</h3>
              <p className="text-gray-600">
                Control font size, padding, spacing, and border padding to perfectly suit your needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-purple-500">
              <div className="mb-4 text-purple-600">
                <img
                  src="https://placehold.co/100x100/DDD6FE/6B4EEA?text=Export"
                  alt="Export Icon"
                  className="mx-auto h-24 w-24 mb-4 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Effortless Export</h3>
              <p className="text-gray-600">
                Export your bitmap font as standard PNG and FNT files, ready for integration into your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Step 1 */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 1: Prepare Your Text</h3>
              <p className="text-gray-700 mb-4">
                Select your text layer in Photoshop with any desired layer effects. Ensure the font is installed on your system.
              </p>
              <img
                src="Step1.png"
                alt="Step 1: Prepare Text"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            {/* Step 2 */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 2: Generate Atlas</h3>
              <p className="text-gray-700 mb-4">
                Set font size in the plugin and click "Generate" to create your bitmap atlas in a new document.
              </p>
              <img
                src="Step2.png"
                alt="Step 2: Generate Atlas"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 3: Fine-tune Settings</h3>
              <p className="text-gray-700 mb-4">
                Adjust padding, spacing, and border padding to perfect your atlas layout visually.
              </p>
              <img
                src="Step3.png"
                alt="Step 3: Adjust Settings"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            {/* Step 4 */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Step 4: Export Your Font</h3>
              <p className="text-gray-700 mb-4">
                Load your original font, name your files, and export to get PNG and FNT files.
              </p>
              <img
                src="Step4.png"
                alt="Step 4: Export Font"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-l from-indigo-700 to-blue-600 text-white py-20 px-4 text-center shadow-lg rounded-t-lg mt-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Text?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get the Typewriter plugin today and revolutionize your bitmap font creation workflow!
          </p>
          <a
            href="mailto:abhi.pathak1998@gmail.com?subject=Inquiry about Typewriter Photoshop Plugin"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg"
          >
            Contact Us to Get the Plugin
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-4 text-center rounded-t-lg">
        <div className="container mx-auto">
          <p className="mb-4">
            For support or inquiries, feel free to contact us at{' '}
            <a href="mailto:abhi.pathak401@gmail.com" className="text-blue-400 hover:underline">
              abhi.pathak401@gmail.com
            </a>
          </p>
          <p className="text-sm opacity-75">
            &copy; {new Date().getFullYear()} Typewriter Plugin. All rights reserved.
          </p>
        </div>
      </footer>
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
          <img src="Step2.png" alt="Step 2: Typewriter plugin interface and generated bitmap atlas" />
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
          <img src="Step3.png" alt="Step 3: Adjusting atlas settings" />
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