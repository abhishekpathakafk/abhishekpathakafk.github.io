import React from "react";
import './Typewriter.css';
import { FilterVintage, GetApp, ViewModule } from "@mui/icons-material";

export function TypeWriter(style?: React.CSSProperties) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb', // bg-gray-50
        fontFamily: 'sans-serif', // font-sans
        WebkitFontSmoothing: 'antialiased', // antialiased
        MozOsxFontSmoothing: 'grayscale', // antialiased
        color: '#374151', // text-gray-800
        ...style, // Apply any passed in style prop
      }}
    >
      {/* Global styles like font import and icon can't be inline, so they remain in a style block */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          /* This icon class is not used in the provided JSX, but kept for completeness if needed */
          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 1em;
            height: 1em;
          }
        `}
      </style>

      <header
        style={{
          backgroundColor: '#ffffff', // bg-white
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
          paddingTop: '1rem', // py-4
          paddingBottom: '1rem', // py-4
        }}
      >
        <div
          style={{
            maxWidth: '1280px', // container (approx)
            margin: '0 auto', // mx-auto
            paddingLeft: '1rem', // px-4
            paddingRight: '1rem', // px-4
            display: 'flex', // flex
            justifyContent: 'space-between', // justify-between
            alignItems: 'center', // items-center
          }}
        >
          <h1
            style={{
              fontSize: '1.5rem', // text-2xl
              fontWeight: 'bold', // font-bold
              color: '#2563eb', // text-blue-600
            }}
          >
            Typewriter Plugin
          </h1>
        </div>
      </header>

      <section
        style={{
          background: 'linear-gradient(to right, #2563eb, #4f46e5)', // bg-gradient-to-r from-blue-600 to-indigo-700
          color: '#ffffff', // text-white
          paddingTop: '5rem', // py-20
          paddingBottom: '5rem', // py-20
          paddingLeft: '1rem', // px-4
          paddingRight: '1rem', // px-4
          textAlign: 'center', // text-center
          borderRadius: '0 0 0.5rem 0.5rem', // rounded-b-lg (only bottom corners)
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
        }}
      >
        <div
          style={{
            maxWidth: '1280px', // container
            margin: '0 auto', // mx-auto
          }}
        >
          <h2
            style={{
              fontSize: '2.25rem', // text-4xl
              // md:text-5xl for responsiveness would require JS or media queries
              fontWeight: 'bolder', // font-extrabold
              marginBottom: '1.5rem', // mb-6
              lineHeight: '1.25', // leading-tight
            }}
          >
            Bring Your Photoshop Text to Life with Typewriter
          </h2>
          <p
            style={{
              fontSize: '1.25rem', // text-xl
              // md:text-2xl for responsiveness would require JS or media queries
              marginBottom: '2rem', // mb-8
              opacity: 0.9, // opacity-90
              maxWidth: '48rem', // max-w-3xl (approx)
              margin: '0 auto 2rem auto', // mx-auto (combined with mb-8)
            }}
          >
            Transform text layers with effects into stunning bitmap fonts effortlessly.
          </p>
          <a
            href="#/ps/typewriter/help"
            style={{
              display: 'inline-block', // inline-block
              backgroundColor: '#ffffff', // bg-white
              color: '#1d4ed8', // text-blue-700
              // hover:bg-blue-100 would require JS for `:hover` effect
              fontWeight: 'bold', // font-bold
              paddingTop: '0.75rem', // py-3
              paddingBottom: '0.75rem', // py-3
              paddingLeft: '2rem', // px-8
              paddingRight: '2rem', // px-8
              borderRadius: '9999px', // rounded-full
              fontSize: '1.125rem', // text-lg
              transition: 'all 0.3s ease-in-out', // transition duration-300 ease-in-out
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
              textDecoration: 'none', // Anchor tags often have underlines by default
            }}
          >
            Discover Features
          </a>
        </div>
      </section>

      <section
        id="features"
        style={{
          paddingTop: '4rem', // py-16
          paddingBottom: '4rem', // py-16
          paddingLeft: '1rem', // px-4
          paddingRight: '1rem', // px-4
          backgroundColor: '#f9fafb', // bg-gray-50
        }}
      >
        <div
          style={{
            maxWidth: '1280px', // container
            margin: '0 auto', // mx-auto
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem', // text-3xl
              fontWeight: 'bold', // font-bold
              textAlign: 'center', // text-center
              marginBottom: '3rem', // mb-12
            }}
          >
            Key Features
          </h2>
          <div
            style={{
              display: 'grid', // grid
              // md:grid-cols-2 lg:grid-cols-3 would require JS for responsiveness
              gap: '2.5rem', // gap-10 (10 * 0.25rem = 2.5rem)
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // A generic way to simulate responsive columns without media queries
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff', // bg-white
                padding: '2rem', // p-8
                borderRadius: '0.5rem', // rounded-lg
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
                textAlign: 'center', // text-center
                borderTop: '4px solid #3b82f6', // border-t-4 border-blue-500
              }}
            >
              <div
                style={{
                  marginBottom: '1rem', // mb-4
                  color: '#2563eb', // text-blue-600
                }}
              >
              <FilterVintage/>
              </div>
              <h3
                style={{
                  fontSize: '1.25rem', // text-xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '0.75rem', // mb-3
                }}
              >
                Preserve Layer Effects
              </h3>
              <p
                style={{
                  color: '#4b5563', // text-gray-600
                }}
              >
                Automatically convert Photoshop text layers, including all applied layer effects,
                into a ready-to-use bitmap font.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff', // bg-white
                padding: '2rem', // p-8
                borderRadius: '0.5rem', // rounded-lg
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
                textAlign: 'center', // text-center
                borderTop: '4px solid #6366f1', // border-t-4 border-indigo-500
              }}
            >
              <div
                style={{
                  marginBottom: '1rem', // mb-4
                  color: '#4f46e5', // text-indigo-600
                }}
              >
                <ViewModule/>
              </div>
              <h3
                style={{
                  fontSize: '1.25rem', // text-xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '0.75rem', // mb-3
                }}
              >
                Customizable Atlas Generation
              </h3>
              <p
                style={{
                  color: '#4b5563', // text-gray-600
                }}
              >
                Control font size, padding, spacing, and border padding to perfectly suit your
                needs.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff', // bg-white
                padding: '2rem', // p-8
                borderRadius: '0.5rem', // rounded-lg
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
                textAlign: 'center', // text-center
                borderTop: '4px solid #a855f7', // border-t-4 border-purple-500
              }}
            >
              <div
                style={{
                  marginBottom: '1rem', // mb-4
                  color: '#9333ea', // text-purple-600
                }}
              >
              <GetApp/>
              </div>
              <h3
                style={{
                  fontSize: '1.25rem', // text-xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '0.75rem', // mb-3
                }}
              >
                Effortless Export
              </h3>
              <p
                style={{
                  color: '#4b5563', // text-gray-600
                }}
              >
                Export your bitmap font as standard PNG and FNT files, ready for integration into
                your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        style={{
          paddingTop: '4rem', // py-16
          paddingBottom: '4rem', // py-16
          paddingLeft: '1rem', // px-4
          paddingRight: '1rem', // px-4
          backgroundColor: '#eff6ff', // bg-blue-50
        }}
      >
        <div
          style={{
            maxWidth: '1280px', // container
            margin: '0 auto', // mx-auto
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem', // text-3xl
              fontWeight: 'bold', // font-bold
              textAlign: 'center', // text-center
              marginBottom: '3rem', // mb-12
            }}
          >
            How It Works
          </h2>
          <div
            style={{
              display: 'grid', // grid
              // md:grid-cols-2 would require JS for responsiveness
              gap: '2.5rem', // gap-10
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Generic columns
              alignItems: 'center', // items-center
            }}
          >
            {/* Step 1 */}
            <div
              style={{
                // md:col-span-1 (no direct inline equivalent for grid column spans without JS)
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem', // text-2xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '1rem', // mb-4
                  color: '#1d4ed8', // text-blue-700
                }}
              >
                Step 1: Prepare Your Text
              </h3>
              <p
                style={{
                  color: '#374151', // text-gray-700
                  marginBottom: '1rem', // mb-4
                }}
              >
                Select your text layer in Photoshop with any desired layer effects. Ensure the font
                is installed on your system.
              </p>
              <img
                src="Step1.png"
                alt="Step 1: Prepare Text"
                style={{
                  borderRadius: '0.5rem', // rounded-lg
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                  width: '100%', // w-full
                  height: 'auto', // h-auto
                  objectFit: 'cover', // object-cover
                }}
              />
            </div>
            {/* Step 2 */}
            <div
              style={{
                // md:col-span-1
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem', // text-2xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '1rem', // mb-4
                  color: '#1d4ed8', // text-blue-700
                }}
              >
                Step 2: Generate Atlas
              </h3>
              <p
                style={{
                  color: '#374151', // text-gray-700
                  marginBottom: '1rem', // mb-4
                }}
              >
                Set font size in the plugin and click "Generate" to create your bitmap atlas in a
                new document.
              </p>
              <img
                src="Step2.png"
                alt="Step 2: Generate Atlas"
                style={{
                  borderRadius: '0.5rem', // rounded-lg
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                  width: '100%', // w-full
                  height: 'auto', // h-auto
                  objectFit: 'cover', // object-cover
                }}
              />
            </div>
            {/* Step 3 */}
            <div
              style={{
                // md:col-span-1
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem', // text-2xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '1rem', // mb-4
                  color: '#1d4ed8', // text-blue-700
                }}
              >
                Step 3: Fine-tune Settings
              </h3>
              <p
                style={{
                  color: '#374151', // text-gray-700
                  marginBottom: '1rem', // mb-4
                }}
              >
                Adjust padding, spacing, and border padding to perfect your atlas layout visually.
              </p>
              <img
                src="Step3.png"
                alt="Step 3: Adjust Settings"
                style={{
                  borderRadius: '0.5rem', // rounded-lg
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                  width: '100%', // w-full
                  height: 'auto', // h-auto
                  objectFit: 'cover', // object-cover
                }}
              />
            </div>
            {/* Step 4 */}
            <div
              style={{
                // md:col-span-1
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem', // text-2xl
                  fontWeight: '600', // font-semibold
                  marginBottom: '1rem', // mb-4
                  color: '#1d4ed8', // text-blue-700
                }}
              >
                Step 4: Export Your Font
              </h3>
              <p
                style={{
                  color: '#374151', // text-gray-700
                  marginBottom: '1rem', // mb-4
                }}
              >
                Load your original font, name your files, and export to get PNG and FNT files.
              </p>
              <img
                src="Step4.png"
                alt="Step 4: Export Font"
                style={{
                  borderRadius: '0.5rem', // rounded-lg
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                  width: '100%', // w-full
                  height: 'auto', // h-auto
                  objectFit: 'cover', // object-cover
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(to left, #4f46e5, #2563eb)', // bg-gradient-to-l from-indigo-700 to-blue-600
          color: '#ffffff', // text-white
          paddingTop: '5rem', // py-20
          paddingBottom: '5rem', // py-20
          paddingLeft: '1rem', // px-4
          paddingRight: '1rem', // px-4
          textAlign: 'center', // text-center
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
          borderRadius: '0.5rem 0.5rem 0 0', // rounded-t-lg
          marginTop: '2.5rem', // mt-10
        }}
      >
        <div
          style={{
            maxWidth: '1280px', // container
            margin: '0 auto', // mx-auto
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem', // text-3xl
              // md:text-4xl for responsiveness would require JS or media queries
              fontWeight: 'bold', // font-bold
              marginBottom: '1.5rem', // mb-6
            }}
          >
            Ready to Elevate Your Text?
          </h2>
          <p
            style={{
              fontSize: '1.25rem', // text-xl
              // md:text-2xl for responsiveness would require JS or media queries
              marginBottom: '2rem', // mb-8
              opacity: 0.9, // opacity-90
              maxWidth: '48rem', // max-w-3xl
              margin: '0 auto 2rem auto', // mx-auto (combined with mb-8)
            }}
          >
            Get the Typewriter plugin today and revolutionize your bitmap font creation workflow!
          </p>
          <a
            href="mailto:abhi.pathak1998@gmail.com?subject=Inquiry about Typewriter Photoshop Plugin"
            style={{
              display: 'inline-block', // inline-block
              backgroundColor: '#ffffff', // bg-white
              color: '#4338ca', // text-indigo-700
              // hover:bg-indigo-100 would require JS
              fontWeight: 'bold', // font-bold
              paddingTop: '0.75rem', // py-3
              paddingBottom: '0.75rem', // py-3
              paddingLeft: '2rem', // px-8
              paddingRight: '2rem', // px-8
              borderRadius: '9999px', // rounded-full
              fontSize: '1.125rem', // text-lg
              transition: 'all 0.3s ease-in-out', // transition duration-300 ease-in-out
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
              textDecoration: 'none', // Anchor tags often have underlines by default
            }}
          >
            Contact Us to Get the Plugin
          </a>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: '#1f2937', // bg-gray-800
          color: '#ffffff', // text-white
          paddingTop: '2rem', // py-8
          paddingBottom: '2rem', // py-8
          paddingLeft: '1rem', // px-4
          paddingRight: '1rem', // px-4
          textAlign: 'center', // text-center
          borderRadius: '0.5rem 0.5rem 0 0', // rounded-t-lg
        }}
      >
        <div
          style={{
            maxWidth: '1280px', // container
            margin: '0 auto', // mx-auto
          }}
        >
          <p
            style={{
              marginBottom: '1rem', // mb-4
            }}
          >
            For support or inquiries, feel free to contact us at{' '}
            <a
              href="mailto:abhi.pathak401@gmail.com"
              style={{
                color: '#93c5fd', // text-blue-400
                // hover:underline would require JS for `:hover` effect
                textDecoration: 'none', // Remove default underline
              }}
            >
              abhi.pathak401@gmail.com
            </a>
          </p>
          <p
            style={{
              fontSize: '0.875rem', // text-sm
              opacity: 0.75, // opacity-75
            }}
          >
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