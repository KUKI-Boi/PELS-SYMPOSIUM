/**
 * ==============================================================================
 * SYMPOSIUM ON INDUSTRIAL AUTOMATION (SIA 2026) — GOOGLE FORMS GENERATOR
 * Organizers: IEEE PELS Bangalore Chapter & Christ University PELS SBC
 * Dates: 25–26 November 2026 | Venue: Christ University Kengeri Campus
 * ==============================================================================
 * 
 * Generates 2 completely separate, linear forms:
 * 1. Form for Christ University Participants (No stay questions, no external fields)
 * 2. Form for External Participants (Includes stay & accommodation logistics)
 * 
 * HOW TO RUN:
 * 1. Open: https://script.new
 * 2. Paste this script into Code.gs
 * 3. Click Save, then click "Run"
 * 4. Grant permission (Advanced -> Go to Untitled project -> Allow)
 * 5. Execution log will print both live form links!
 * ==============================================================================
 */

function createAllSymposiumForms() {
  Logger.log("=================================================================");
  Logger.log("🚀 STARTING SIA 2026 GOOGLE FORMS GENERATOR");
  Logger.log("=================================================================\n");

  const christForm = createChristRegistrationForm();
  const externalForm = createExternalRegistrationForm();

  Logger.log("\n=================================================================");
  Logger.log("🎉 BOTH FORMS SUCCESSFULLY GENERATED IN YOUR GOOGLE DRIVE!");
  Logger.log("=================================================================");
  Logger.log("\n🏛️ FORM 1: CHRIST UNIVERSITY PARTICIPANTS");
  Logger.log("👉 Live Link: " + christForm.getPublishedUrl());
  Logger.log("✏️ Edit Link: " + christForm.getEditUrl());

  Logger.log("\n🌐 FORM 2: EXTERNAL PARTICIPANTS (WITH STAY)");
  Logger.log("👉 Live Link: " + externalForm.getPublishedUrl());
  Logger.log("✏️ Edit Link: " + externalForm.getEditUrl());
  Logger.log("\n=================================================================");
  Logger.log("Plug the Live Links into eventData.forms in src/data/event.ts!");
}

/**
 * ------------------------------------------------------------------------------
 * FORM 1: CHRIST UNIVERSITY PARTICIPANTS ONLY
 * ------------------------------------------------------------------------------
 */
function createChristRegistrationForm() {
  const form = FormApp.create("SIA 2026 — Christ University Registration");

  form.setDescription(
    "IEEE PELS Symposium on Industrial Automation 2026\n" +
    "Organized by: IEEE PELS Bangalore Chapter & Christ University PELS SBC\n" +
    "Dates: 25–26 November 2026 | Venue: First Block Auditorium, Kengeri Campus\n\n" +
    "Registration Portal for Christ (Deemed to be University) Students, Scholars & Faculty.\n" +
    "100% Free Registration for all participants."
  );

  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);

  // --- Section 1: Participant Info ---
  form.addTextItem()
    .setTitle("Participant / Team Lead Full Name")
    .setHelpText("As you want it printed on your IEEE presentation/participation certificate.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Christ University Email Address")
    .setHelpText("Please use your official @*.christuniversity.in email ID.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Contact Phone Number (WhatsApp preferred)")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Christ University Register / Roll Number")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Department & Class / Semester")
    .setHelpText("e.g., 5 BTech EEE / MTech Mechatronics / Research Scholar")
    .setRequired(true);

  form.addListItem()
    .setTitle("Campus")
    .setChoiceValues(["Kengeri Campus", "Central Campus", "Yeshwanthpur Campus"])
    .setRequired(true);

  // --- Section 2: Technical Submission ---
  form.addPageBreakItem().setTitle("Technical Event & Track Details");

  form.addMultipleChoiceItem()
    .setTitle("Which event track are you registering for?")
    .setChoiceValues([
      "Paper & Project Presentation (Research Papers)",
      "Industrial Project Competition (Working Hardware Prototypes)"
    ])
    .setRequired(true);

  form.addListItem()
    .setTitle("Eligible Domain / Track")
    .setChoiceValues([
      "Power Electronics & Smart Grid Systems",
      "Industrial Automation & PLC/SCADA/HMI",
      "Robotics, Mechatronics & Embedded Systems",
      "Electric Drives & Renewable Energy Integration",
      "IoT & Industry 4.0 Smart Factory Solutions",
      "Hardware Testbenches & Converter Prototypes"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Title of Paper / Project Prototype")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Abstract / Technical Summary")
    .setHelpText("Summarize the problem statement, methodology, results, or prototype hardware components.")
    .setRequired(true);

  form.addListItem()
    .setTitle("Team Size")
    .setChoiceValues(["Individual (1 Member)", "2 Members", "3 Members", "4 Members (Maximum)"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Co-Author / Team Member Details")
    .setHelpText("List full names and register numbers of other team members attending.")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Draft Paper / Prototype Demo Link (Google Drive / Cloud URL)")
    .setHelpText("Upload your PDF or prototype photos/video to Google Drive, set access to 'Anyone with link', and paste the URL.")
    .setRequired(true);

  // --- Section 3: Declaration ---
  form.addPageBreakItem().setTitle("Declaration & Final Submission");

  form.addCheckboxItem()
    .setTitle("Participant Agreement")
    .setChoiceValues([
      "I confirm that this submission is original work and all authors agree to attend SIA 2026.",
      "I agree to adhere to the symposium code of conduct at Christ University Kengeri Campus."
    ])
    .setRequired(true);

  return form;
}

/**
 * ------------------------------------------------------------------------------
 * FORM 2: EXTERNAL PARTICIPANTS ONLY (WITH STAY)
 * ------------------------------------------------------------------------------
 */
function createExternalRegistrationForm() {
  const form = FormApp.create("SIA 2026 — External Participants Registration");

  form.setDescription(
    "IEEE PELS Symposium on Industrial Automation 2026\n" +
    "Organized by: IEEE PELS Bangalore Chapter & Christ University PELS SBC\n" +
    "Dates: 25–26 November 2026 | Venue: Christ University Kengeri Campus, Bengaluru\n\n" +
    "Registration Portal for External College & University Participants.\n" +
    "100% Free Registration • Cash Prizes • IEEE Certificates.\n" +
    "On-Campus Accommodation available at Kengeri Campus upon request."
  );

  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);

  // --- Section 1: Lead Participant Info ---
  form.addTextItem()
    .setTitle("Lead Presenter / Team Leader Full Name")
    .setHelpText("As you want it printed on your IEEE presentation/participation certificate.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Official Email Address")
    .setHelpText("For acceptance letter and symposium coordination.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Contact Phone Number (WhatsApp preferred)")
    .setRequired(true);

  form.addTextItem()
    .setTitle("College / University Official Name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("College City & State")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Department & Year of Study")
    .setHelpText("e.g., Department of EEE / Mechanical / Robotics, 3rd Year")
    .setRequired(true);

  form.addTextItem()
    .setTitle("College Student ID Card Photo Link (Google Drive / Cloud URL)")
    .setHelpText("Paste a public Google Drive / cloud link to your College ID card photo for verification.")
    .setRequired(true);

  // --- Section 2: Technical Submission ---
  form.addPageBreakItem().setTitle("Technical Event & Track Details");

  form.addMultipleChoiceItem()
    .setTitle("Which event track are you registering for?")
    .setChoiceValues([
      "Paper & Project Presentation (Research Papers)",
      "Industrial Project Competition (Working Hardware Prototypes)"
    ])
    .setRequired(true);

  form.addListItem()
    .setTitle("Eligible Domain / Track")
    .setChoiceValues([
      "Power Electronics & Smart Grid Systems",
      "Industrial Automation & PLC/SCADA/HMI",
      "Robotics, Mechatronics & Embedded Systems",
      "Electric Drives & Renewable Energy Integration",
      "IoT & Industry 4.0 Smart Factory Solutions",
      "Hardware Testbenches & Converter Prototypes"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Title of Paper / Project Prototype")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Abstract / Technical Description")
    .setHelpText("Provide a summary of the methodology, hardware components, or problem statement.")
    .setRequired(true);

  form.addListItem()
    .setTitle("Team Size")
    .setChoiceValues(["Individual (1 Member)", "2 Members", "3 Members", "4 Members (Maximum)"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Team Members' Names, Colleges & Contact Numbers")
    .setHelpText("List all team members attending the symposium.")
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle("Bench Space & Utility Requirements (For Hardware Teams)")
    .setChoiceValues([
      "Standard Lab Bench Table Space",
      "Single-Phase 230V AC Power Socket",
      "3-Phase 415V AC Industrial Power Socket",
      "Compressed Air Supply (Pneumatics)",
      "Wi-Fi Connection",
      "Not Applicable (Paper Presentation Only)"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Paper PDF / Prototype Demo Video Link (Google Drive / Cloud URL)")
    .setHelpText("Upload your file to Google Drive, set access to 'Anyone with link', and paste the URL here.")
    .setRequired(true);

  // --- Section 3: Accommodation / Stay Logistics (EXTERNAL ONLY) ---
  form.addPageBreakItem().setTitle("On-Campus Accommodation & Stay Logistics");

  form.addMultipleChoiceItem()
    .setTitle("Do you require On-Campus Accommodation / Stay at Christ University Kengeri Campus?")
    .setHelpText("Hostel lodging facilities are available inside the Kengeri Campus for outstation participants.")
    .setChoiceValues([
      "Yes — I/we require on-campus accommodation",
      "No — Local participant / will arrange own stay"
    ])
    .setRequired(true);

  form.addListItem()
    .setTitle("Gender (Required for campus hostel block allocation)")
    .setChoiceValues([
      "Male (Boys Hostel)",
      "Female (Girls Hostel)",
      "Mixed Team (Separate Boys & Girls Hostels)",
      "Not Applicable (Not staying)"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Total Number of Persons Requiring Stay")
    .setHelpText("e.g., '1' or '2 Male, 1 Female'. Write 'N/A' if not staying.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Expected Check-in Date & Time")
    .setHelpText("e.g., 24th Nov 7:00 PM or 25th Nov 8:00 AM")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Expected Check-out Date & Time")
    .setHelpText("e.g., 26th Nov 6:00 PM or 27th Nov morning")
    .setRequired(false);

  // --- Section 4: Declaration ---
  form.addPageBreakItem().setTitle("Declaration & Final Submission");

  form.addCheckboxItem()
    .setTitle("Participant Agreement")
    .setChoiceValues([
      "I confirm that all submitted details and credentials are true and original.",
      "Our team agrees to attend and present at SIA 2026 on 25–26 November 2026.",
      "We agree to abide by the campus security and safety guidelines of Christ University."
    ])
    .setRequired(true);

  return form;
}
