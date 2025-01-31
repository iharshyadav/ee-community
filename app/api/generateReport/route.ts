import puppeteer from "puppeteer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const data = await prisma.co2e_emissions.findMany({
    select: {
      timestamp: true,
      co2e: true,
      co2e_unit: true,
      Label: true,
      category: true,
      sector: true,
      location: true,
    },
  });

  // Initialize variables to store total emissions for each scope
  let scope1Total = 0;
  let scope2Total = 0;
  let scope3Total = 0;

  // Loop through each record to accumulate totals for each scope
  data.forEach((entry) => {
    let co2eValue = entry.co2e ?? 0;

    // Convert 'tonnes CO2e' to 'kg CO2e' if necessary
    if (entry.co2e_unit === "tonnes CO2e") {
      co2eValue = Number(co2eValue) * 1000; // Convert tonnes to kilograms
    }

    // Accumulate based on the Label (Scope-1, Scope-2, Scope-3)
    if (entry.Label === "Scope-1") {
      scope1Total += Number(co2eValue);
    } else if (entry.Label === "Scope-2") {
      scope2Total += Number(co2eValue);
    } else if (entry.Label === "Scope-3") {
      scope3Total += Number(co2eValue);
    }
  });

  // Calculate the overall total CO₂ emissions
  const totalEmissions = scope1Total + scope2Total + scope3Total;

  const htmlContent = `
  <html>
    <head>
      <style>
        @page {
          background: #e6f9e6; /* Light green background */
        }
        body {
          font-family: Arial, sans-serif;
          margin: 100px;
          margin-top: 50px;
          padding: 20px;
          color: #333;
          background-color: #e6f9e6; /* Light green background */
          position: relative;
          overflow: hidden; /* Hide overflow for watermark */
        }
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg); /* Tilt the watermark */
          opacity: 0.1; /* Light watermark */
          font-size: 5em; /* Large font for watermark */
          color: grey; /* Watermark color */
          pointer-events: none; /* Prevent interaction with watermark */
          white-space: nowrap;
          z-index: -1; /* Send it to the back */
          width: 100vw; /* Ensure it stretches across the viewport */
          height: 100vh; /* Ensure it covers the entire viewport */
        }
        h1, h2, h3 {
          margin: 18px 0;
        }
        p {
          line-height: 1.6;
          margin: 10px 0;
        }
        .content {
          margin-bottom: 15px; /* Added spacing between sections */
        }
        .line {
          border-top: 1px solid #ddd;
          margin: 20px 0;
        }
        .heading {
          font-size: 32px;
          font-weight: bold;
          font-weight: extra-bold;
          margin-bottom: 5px;
        }  
        .subheading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 12px;
          margin-top: 25px;
        } 
        .subheading-5 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 12px;
          padding-top: 80px;
        } 
        .subhead {
          font-weight: bold;
          font-size: 22px;  
        } 
        .subpara {
          font-size: 20px;
          margin-bottom: 0px;
          line-height: 1.1;
        }
         ul {
        padding-left: 20px; /* Ensure indentation for lists */
        margin: 5px 0; /* Reduced margin for lists */
      }
        .line {
          width: 100%;
          border-top: 4px solid grey;
          }  
        .subpara2 {
          font-size: 20px;
          margin: 0px;
          padding: 0px;
        }
        .scope {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 0px;
        } 
      </style>
    </head>
    <body>
      <div class="watermark">EarthEmission.com</div>
      <h1 class="heading">Greenhouse Gas (GHG) Emissions Report</h1>
      <h2>Company Name</h2>
      <h2>Reporting Year: 2021</h2>
      <hr style="width: 100%; border-top: 4px solid grey;">
      <div class="content">
        <h1 class="subheading">1. Executive Summary</h1>
        <ul>
          <li>
          <p class="subpara"><span class="subhead">Purpose</span>:This report provides a comprehensive overview of the company's greenhouse gas emissions for the reporting year, highlighting progress toward carbon reduction targets.</p>
          </li>
          <li>
           <p class="subpara"><span class="subhead">GHG Reduction Goals</span>:[GHG_Reduction_Goals].</p>
          </li>
        </ul>
      </div>
      <hr class="line">
      <div class="content">
        <h1 class="subheading">2. Organizational Boundaries</h1>
        <ul>
          <li>
          <p class="subpara"><span class="subhead">Boundary Approach</span>:[Boundary_Approach].</p>
          </li>
          <li>
          <p class="subpara"><span class="subhead">Included Entities</span>:[Entities].</p>
          </li>
          <li>
          <p class="subpara"><span class="subhead">Exclusions</span>:[Exclusions]</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h1 class="subheading">3. Operational Boundaries</h1>
        <ul>
          <li>
            <h2 class="scope">Scope 1: Direct Emissions</h2>
            <ul>
            <li>
            <p class="subpara2"><span class="subhead">Sources</span>:[sources_direct_emissions]</p>
            </li>
            <li>
            <p class="subpara2"><span class="subhead">Emission Data</span>:${scope1Total}</p>
            </li>
            </ul>
          </li>
          <li>
            <h2 class="scope">Scope 2: Indirect Energy Emissions</h2>
            <ul>
              <li>
              <p class="subpara2"><span class="subhead">Purchased Energy</span>:[sources_indirect_emissions]</p>
              </li>
              <li>
              <p class="subpara2"><span class="subhead">Emission Data</span>:${scope2Total}</p>
              </li>
            </ul>
          </li>
          <li>
            <h2 class="scope">Scope 3: Other Indirect Emissions</h2>
            <ul>
              <li>
              <p class="subpara2"><span class="subhead">Emission Data</span>:${scope2Total}</p>
              <p class="subpara2"><span class="subhead"> Sources</span>: [categories_scope3_emissions]</p>
              </li>
              <li>
              <p class="subpara2"><span class="subhead">Emission Data</span>:${scope2Total}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">4. Emission Calculation Methodologies</h2>
        <ul>
          <li>
            <p class="subpara2"><span class="subhead">Data Collection</span>: [Data_collection]</p>
          </li>
          <li>
           <p class="subpara2"><span class="subhead">Calculation Tools and Standards</span> : [tools_used]</p>
          </li>
          <li>
           <p class="subpara2"><span class="subhead">Emission Factors</span>: [emission_factor_sources]</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div style="margin-top:150px" class="content">
        <h2 class="subheading-5">5. GHG Emission Data</h2>
        <ul>
          <li><h2 class="scope">Total Emissions:</h2>
            <ul>
              <li>
               <p class="subpara2"><span class="subhead">Scope 1 Emissions</span>: ${scope1Total}</p>
             </li>
              <li>
               <p class="subpara2"><span class="subhead">Scope 2 Emissions</span> : ${scope2Total}</p>
             </li>
              <li>
               <p class="subpara2"><span class="subhead">Scope 3 Emissions</span>: ${scope3Total}</p>
               </li>
              <li>
               <p class="subpara2"><span class="subhead">Overall Emissions</span>: ${totalEmissions}</p>
             </li>
            </ul>
          </li>
          <li>
          <p class="subpara2"><span class="subhead">Emission Breakdown</span>: [Table_emission_per_sourcetype_and_category]</p>
          </li>
          <li>
          <p class="subpara2"><span class="subhead"> Trend Analysis</span>  : [Trend_analysis_graph]</p>
       </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">6. Emission Intensity Metrics</h2>
        <ul>
          <li>
          <p class="subpara2"><span class="subhead">Intensity per Output</span>: [Intensity_per_output]</p>
          </li>
          <li>
          <p class="subpara2"><span class="subhead">Benchmarking</span>: [industry_benchmark_comparison]</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">7. Uncertainty and Assumptions</h2>
        <ul>
          <li>
          <p class="subpara2"><span class="subhead">Uncertainty Levels</span>: [uncertainty_levels]</p>
          </li>
          <li>
          <p class="subpara2"><span class="subhead">Key Assumptions</span>: [assumptions]</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">8. Compliance and Verification</h2>
        <ul>
          <li>
          <p class="subpara2"><span class="subhead">Regulatory Compliance</span>: [regulatory_compliance]</p>
          <li>
          <p class="subpara2"><span class="subhead">Third-Party Verification</span>: [verified_by_third_party]</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">9. Recommendations and Next Steps</h2>
        <ul>
          <li>
           <p class="subpara2"><span class="subhead">Opportunities for Improvement</span>: [opportunities_for_improvement]</p>
           </li>
          <li>
          <p class="subpara2">Future Reporting Plans: [future_plans]</p>
           </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">10. Supporting Documentation</h2>
        <ul>
          <li>
          <p class="subpara2">Appendices: [supporting_docs]</p>
         </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2 class="subheading">11. Charts and Graphs</h2>
        <ul>
          <li>
         <p class="subpara2">Charts and Graphs: [charts_graphs]</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="content">
        <h2>Prepared by</h2>
        <p>EarthEmission.com</p>
      </div>
    </body>
  </html>
  `;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load HTML content into the page
    await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });

    // Create PDF from page content
    const pdfBuffer = await page.pdf({
      format: "A4",
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" }, // No additional margin
      printBackground: true,
    });

    // Close the browser instance
    await browser.close();

    // Return the generated PDF as the response
    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=GHG_Emissions_Report.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new Response("Error generating PDF", { status: 500 });
  }
}
