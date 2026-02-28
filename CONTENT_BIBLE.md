# Global Apheresis — Content Bible

Complete content and structure reference for replicating this site's content on a different platform with a different visual design. Contains ALL text, structure, and content rules extracted directly from the source code.

Last updated: February 28, 2026

---

## Table of Contents

1. [Practice Information](#practice-information)
2. [Navigation Structure](#navigation-structure)
3. [Homepage](#homepage)
4. [Treatments Overview Page](#treatments-overview-page)
5. [Therapeutic Plasma Exchange Page](#therapeutic-plasma-exchange-page)
6. [Longevity Optimization Page](#longevity-optimization-page)
7. [Alzheimer's & Cognitive Decline Page](#alzheimers--cognitive-decline-page)
8. [Autoimmune Disorders Page](#autoimmune-disorders-page)
9. [Post-Infectious Syndromes Page](#post-infectious-syndromes-page)
10. [Cytoreduction & Stem Cell Page](#cytoreduction--stem-cell-page)
11. [Lipid Apheresis Page](#lipid-apheresis-page)
12. [Super Albumin Page](#super-albumin-page)
13. [Physicians Page](#physicians-page)
14. [Affiliates Page](#affiliates-page)
15. [About Page](#about-page)
16. [Blog Page](#blog-page)
17. [Contact Page](#contact-page)
18. [Free Consultation Page](#free-consultation-page)
19. [Footer](#footer)
20. [Blog System & Content](#blog-system--content)
21. [Treatments Data (lib/treatments.ts)](#treatments-data)
22. [SEO / Meta](#seo--meta)
23. [Key Content Rules](#key-content-rules)

---

## Practice Information

- **Practice Name**: Global Apheresis
- **Address**: 655 Redwood Highway, Suite 370, Mill Valley, CA 94941
- **Phone**: (415) 928-1352
- **Email**: info@globalapheresis.com
- **Hours**: Monday - Friday: 9:00 AM - 5:00 PM; Saturday - Sunday: Closed
- **Website**: globalapheresis.com

### Social Media
- **YouTube**: https://www.youtube.com/@GlobalApheresis (also @globalapheresis)
- **LinkedIn**: https://www.linkedin.com/in/dobri-kiprov-2963ab31/ (Dr. Kiprov's personal profile)
- **Instagram**: https://www.instagram.com/globalapheresis

---

## Navigation Structure

### Desktop Nav (top-level links, left to right)
1. **Services** (links to `/treatments`) — has two-column dropdown:
   - Column 1: "Treatments"
     - Therapeutic Plasma Exchange → `/treatments/therapeutic-plasma-exchange`
     - Lipid Apheresis → `/treatments/lipid-apheresis`
     - Cytoreduction & Stem Cell Collections → `/treatments/cytoreduction-stem-cell`
     - Super Albumin → `/treatments/super-albumin`
   - Column 2: "Conditions"
     - Alzheimer's & Cognitive Decline → `/treatments/alzheimers-cognitive-decline`
     - Longevity & Health Optimization → `/treatments/longevity-optimization`
     - Autoimmune Disorders → `/treatments/autoimmune-disorders`
     - Post-Infectious Syndromes → `/treatments/post-infectious-syndromes`
2. **Physicians** → `/physicians`
3. **Affiliates** → `/affiliates`
4. **About** → `/about`
5. **Blog** → `/blog`
6. **Contact** → `/contact`
7. **Book a Free Consultation** (CTA button) → `/free-consultation`

### Mobile Nav (hamburger menu)
Same structure with Services as an expandable accordion. Includes:
- "View All Services" link at bottom of expanded Services section
- Phone number and email at bottom of menu
- "Book a Free Consultation" full-width CTA button

### All Page Routes
- `/` (Homepage)
- `/treatments` (Treatments Overview)
- `/treatments/therapeutic-plasma-exchange`
- `/treatments/longevity-optimization`
- `/treatments/alzheimers-cognitive-decline`
- `/treatments/autoimmune-disorders`
- `/treatments/post-infectious-syndromes`
- `/treatments/cytoreduction-stem-cell`
- `/treatments/lipid-apheresis`
- `/treatments/super-albumin`
- `/physicians`
- `/affiliates`
- `/about`
- `/blog`
- `/blog/[slug]` (dynamic blog posts)
- `/contact`
- `/free-consultation`

---

## Homepage

**Route**: `/`
**Page Title**: Global Apheresis — Therapeutic Apheresis in Mill Valley, CA
**Meta Description**: Pioneering therapeutic apheresis for over 40 years. Led by Dr. Dobri Kiprov. Treatments for Alzheimer's, autoimmune disorders, longevity, and more.

### Section 1: Hero
- **Label**: MILL VALLEY, CALIFORNIA
- **Heading**: Pioneering the Next Frontier of Therapeutic Apheresis
- **Subtitle** (italic): Led by Dr. Dobri Kiprov, one of the physicians who established therapeutic plasma exchange as a clinical discipline over 40 years ago.
- **CTA Button**: Book a Free Consultation → `/free-consultation`
- **Scroll Indicator**: "Discover"

### Section 2: Philosophy Quote
- **Quote**: "When we remove what burdens the blood, we give the body permission to heal itself. This has been our guiding principle for four decades."
- **Attribution**: — Dr. Dobri Kiprov, M.D., H.P. (ASCP)

### Section 3: Legacy (Our Legacy)
- **Label**: OUR LEGACY
- **Heading**: Four Decades of Pioneering Medicine
- **Image**: Dr. Kiprov headshot
- **Paragraph 1**: In 1985, Dr. Dobri Kiprov founded the first mobile therapeutic apheresis program in the United States. A Harvard- and NIH-trained immunologist and the first U.S. physician to pass the Hemapheresis Practitioner Exam, he has spent over four decades defining the modern era of therapeutic plasma exchange.
- **Paragraph 2**: His landmark research — from the AMBAR trial demonstrating significant slowing of Alzheimer's progression, to the first published evidence that TPE reduces biological age — has been validated by independent researchers including the Buck Institute for Research on Aging.
- **Stats**:
  - 40+ — Years Practicing
  - 15,000+ — Treatments Overseen
  - 100+ — Publications

### Section 4: Conditions We Treat
- **Label**: CONDITIONS WE TREAT
- **Heading**: Restoring What Matters Most
- **Subtext**: Therapeutic apheresis offers a path forward for patients navigating complex and often resistant conditions.
- **Cards** (4 cards):
  1. **Longevity & Health Optimization**: Measurably reduce biological age and optimize healthspan through evidence-based plasma exchange, validated across 35 epigenetic clocks. → `/treatments/longevity-optimization`
  2. **Alzheimer's & Cognitive Decline**: The landmark AMBAR trial demonstrated TPE slows Alzheimer's progression by 52-71% — with a superior safety profile to monoclonal antibodies. → `/treatments/alzheimers-cognitive-decline`
  3. **Autoimmune Disorders**: Remove the pathogenic antibodies and inflammatory mediators driving conditions like myasthenia gravis, Guillain-Barre syndrome, and multiple sclerosis. → `/treatments/autoimmune-disorders`
  4. **Post-Infectious Syndromes**: Address the persistent inflammatory burden underlying Long COVID, PANDAS, and other chronic post-infectious conditions. → `/treatments/post-infectious-syndromes`
  - Each card has "Learn More →" link

### Section 5: The Science (dark background)
- **Label**: THE SCIENCE
- **Heading**: Understanding Therapeutic Apheresis
- **Description**: A sophisticated medical procedure that selectively removes disease-causing substances from the blood, allowing the body's natural healing mechanisms to restore balance.
- **Steps**:
  1. **01 — Comprehensive Assessment**: Every protocol begins with a thorough clinical evaluation — blood panels, biomarkers, and medical history — to design a treatment plan tailored to your specific condition and goals.
  2. **02 — Selective Plasma Exchange**: Using advanced apheresis technology, aging plasma — including pro-inflammatory factors, disease-associated proteins, and accumulated toxins — is gently separated and removed from your blood.
  3. **03 — Albumin Replacement**: Purified albumin, one of the body's most potent natural antioxidants and anti-inflammatory proteins, replaces the removed plasma — restoring balance and supporting the body's innate healing capacity.
  4. **04 — Monitoring & Optimization**: Post-treatment biomarker analysis tracks measurable outcomes — from epigenetic age clocks to inflammatory markers — ensuring every session builds on the last.
- **Image**: Optia Apheresis Machine

### Section 6: For Physicians
- **Label**: FOR PHYSICIANS
- **Heading**: Bring Therapeutic Apheresis to Your Practice
- **Body**: Global Apheresis offers a complete turnkey solution for clinics and providers who want to offer evidence-based therapeutic apheresis — backed by protocols refined over four decades and direct training from the pioneers of the field.
- **Bullet points**:
  - Physician and staff certification in Dr. Kiprov's protocols
  - Equipment procurement, albumin, and consumable supply chain
  - Multiple tiers of medical directorship and clinical consultation
  - Co-branded marketing materials and patient education resources
- **CTA**: Explore Partnership → `/affiliates`
- **Image**: Dr. Green with Amicus machine

### Section 7: Visit Us
- **Label**: VISIT US
- **Heading**: Nestled in the Heart of Mill Valley
- **Body**: Set among the serene redwood groves of Marin County, our practice reflects the same philosophy we bring to medicine — that healing begins when the environment itself supports restoration and renewal.
- **Address block**:
  - 655 Redwood Highway, Suite 370
  - Mill Valley, CA 94941
  - (415) 928-1352
  - info@globalapheresis.com
- **CTA**: Book a Free Consultation → `/free-consultation`
- **Image**: Global Apheresis Team photo

---

## Treatments Overview Page

**Route**: `/treatments`
**Page Title**: Treatments
**Meta Description**: Comprehensive therapeutic apheresis treatments including plasma exchange for longevity, Alzheimer's, autoimmune disorders, PANS/PANDAS, Long COVID, and more.

### Section 1: Hero
- **Label**: WHAT WE OFFER
- **Heading**: Comprehensive Therapeutic Apheresis
- **Subtitle**: Evidence-based treatments for longevity, neurological conditions, and immune health — led by the pioneers of the field.

### Section 2: Treatment Cards
Cards are generated from `lib/treatments.ts` (see [Treatments Data](#treatments-data) section). Each card shows title, description, tags, and "View Treatment →" or "Learn More →" link. Cards marked `comingSoon` display a "Coming Soon" badge.

### Section 3: Research Callout (dark background)
- **Label**: THE EVIDENCE
- **Heading**: Backed by Clinical Research
- **Stat cards**:
  1. **52-71%** — Slowing of Alzheimer's Progression (AMBAR)
  2. **1-3 yrs** — Biological Age Reversal (GeroScience 2022)
  3. **50+** — Years of Established Safety Data

### Section 4: CTA
- **Heading**: Not Sure Where to Start?
- **Body**: Schedule a free consultation with our physicians. We'll help you understand your options and determine which treatment is right for you.
- **CTA**: Book a Free Consultation → `/free-consultation`

---

## Therapeutic Plasma Exchange Page

**Route**: `/treatments/therapeutic-plasma-exchange`
**Page Title**: Therapeutic Plasma Exchange (TPE)
**Meta Description**: Therapeutic plasma exchange removes aging factors, inflammatory proteins, and disease-associated molecules from your blood. Over 50 years of established safety.

### Section 1: Hero (via TreatmentLayout)
- **Label**: CORE TREATMENT
- **Heading**: Therapeutic Plasma Exchange
- **Subtitle**: Our flagship treatment — a clinically validated procedure that removes aging factors, inflammatory proteins, and disease-associated molecules from your blood.

### Section 2: What Is TPE
- **Label**: UNDERSTANDING TPE
- **Heading**: What Is Therapeutic Plasma Exchange?
- **Paragraph 1**: Therapeutic Plasma Exchange (TPE) is a medical procedure in which blood is drawn from the patient and passed through an advanced apheresis machine. The machine separates plasma — the liquid portion of blood that carries proteins, antibodies, inflammatory factors, and aging-related molecules — from the cellular components.
- **Paragraph 2**: The old plasma is removed and replaced with purified albumin solution, while all blood cells are returned to the patient. This process effectively removes harmful or aging-associated proteins and replaces them with clean albumin — the body's most potent natural anti-inflammatory and antioxidant protein.
- **Paragraph 3**: TPE has been performed safely worldwide for over 50 years and is the foundation of all treatment protocols at Global Apheresis.
- **Image**: Optia Apheresis Machine

### Section 3: Conditions Treated
- **Label**: APPLICATIONS
- **Heading**: Conditions We Treat with TPE
- **Cards** (4):
  1. **Longevity Optimization**: Measurably reduce biological age and optimize healthspan through evidence-based plasma exchange, validated across 35 epigenetic clocks. → `/treatments/longevity-optimization`
  2. **Alzheimer's & Cognitive Decline**: The landmark AMBAR trial demonstrated TPE slows Alzheimer's progression by 52-71% — with a superior safety profile to monoclonal antibodies. → `/treatments/alzheimers-cognitive-decline`
  3. **Autoimmune Disorders**: Remove the pathogenic antibodies and inflammatory mediators driving conditions like myasthenia gravis, Guillain-Barre syndrome, and multiple sclerosis. → `/treatments/autoimmune-disorders`
  4. **Post-Infectious Syndromes**: Address the persistent inflammatory burden underlying Long COVID, PANDAS, and other chronic post-infectious conditions. → `/treatments/post-infectious-syndromes`

### Section 4: Research Evidence (dark background)
- **Label**: THE EVIDENCE
- **Heading**: Clinically Proven Results
- **Research Cards**:
  1. **52-71%** — Slowing of Alzheimer's Progression — AMBAR Trial — multicenter, randomized, double-blind, placebo-controlled study of 496 patients with mild-to-moderate Alzheimer's disease.
  2. **1-3 yrs** — Biological Age Reversal — Kim et al. (2022), GeroScience — first clinical evidence that TPE reduces biological age as measured by Horvath and GrimAge clocks, with Dr. Kiprov as co-author and clinical collaborator.
  3. **50+ yrs** — Established Safety Record — Therapeutic plasma exchange has been performed worldwide for over 50 years with a well-documented safety profile across thousands of clinical studies.

### Section 5: What to Expect
- **Label**: YOUR VISIT
- **Heading**: What to Expect
- **Steps**:
  1. **01 — Arrive at Our Clinic**: Check in at our Mill Valley clinic at 655 Redwood Highway, Suite 370. Our team will welcome you and prepare you for treatment in a comfortable, private setting.
  2. **02 — Vascular Access**: A certified apheresis nurse establishes peripheral IV access. The procedure uses two lines — one to draw blood and one to return it.
  3. **03 — Plasma Separation**: Your blood flows through the apheresis machine, which gently separates plasma from blood cells using centrifugal force. The process is continuous and comfortable.
  4. **04 — Albumin Replacement**: Your old plasma — carrying inflammatory factors, aging proteins, and disease-associated molecules — is discarded and replaced with purified albumin solution.
  5. **05 — Completion & Recovery**: Throughout the procedure, your blood cells are continuously returned to your body along with purified albumin. The entire session takes 2-3 hours, after which virtually all patients feel well enough to drive themselves home.

### Section 6: FAQ
- **Label**: COMMON QUESTIONS
- **Heading**: Frequently Asked Questions
- **Q: Is TPE safe?** — TPE has a well-established 50-year safety record. Serious complications are rare when performed by trained specialists. Dr. Kiprov has personally overseen thousands of procedures, and all treatments at Global Apheresis are administered by board-certified physicians and certified apheresis nurses.
- **Q: How many treatments will I need?** — This depends on your goals and condition. Longevity patients often begin with an initial series and transition to periodic maintenance. Alzheimer's patients follow AMBAR study-based protocols. A personalized plan is created during your free consultation.
- **Q: Does TPE hurt?** — TPE requires two small IV insertions, but our highly experienced apheresis nurses and lidocaine minimize discomfort. Once the IVs are placed, the procedure itself is completely comfortable, and many patients read, watch a show, or simply relax during their session.
- **Q: Is TPE covered by insurance?** — Coverage varies by condition and insurer. TPE for longevity and health optimization is typically not covered by insurance. However, certain medical indications may qualify for reimbursement. We recommend contacting your insurance provider, and our team is happy to help clarify your options during your consultation.

### Section 7: Related Treatments (auto-generated from TreatmentLayout)
### Section 8: CTA Band — "Ready to Begin?" → Book a Free Consultation

---

## Longevity Optimization Page

**Route**: `/treatments/longevity-optimization`
**Page Title**: Longevity Optimization
**Meta Description**: Evidence-based therapeutic plasma exchange shown to reduce biological age by 1-3 years. Validated by the Buck Institute across 35 epigenetic clocks.

### Section 1: Hero (via TreatmentLayout)
- **Label**: LONGEVITY
- **Heading**: Longevity Optimization
- **Subtitle**: Evidence-based therapeutic plasma exchange protocols shown to reduce biological age and optimize healthspan.

### Section 2: The Science of Aging
- **Label**: THE SCIENCE OF AGING
- **Heading**: Why Plasma Holds the Key to Biological Age
- **Paragraph 1**: As we age, our plasma accumulates pro-inflammatory proteins, damaged albumin, and aging-associated factors that signal deterioration to every cell in the body. These circulating molecules are increasingly recognized as primary drivers of biological aging.
- **Paragraph 2**: Therapeutic plasma exchange removes this burden in a single session, replacing old plasma with purified albumin — one of the body's most potent natural anti-inflammatory and antioxidant proteins. The result is a measurable reset of the circulating environment, creating conditions that support cellular repair and regeneration.
- **Paragraph 3**: Dr. Kiprov's research, first published in GeroScience in 2022, demonstrated that TPE measurably reduces biological age. A subsequent multi-omics study conducted with the Buck Institute for Research on Aging validated and expanded these findings across 35 epigenetic clocks.

### Section 3: Research Evidence (dark background)
- **Label**: PUBLISHED RESEARCH
- **Heading**: Clinical Evidence for Age Reversal
- **Research Cards**:
  1. **1-3 yrs** — Biological Age Reversal — Kiprov et al. (2022), published in GeroScience, demonstrated that a series of TPE treatments reduced biological age by 1-3 years as measured by validated Horvath and GrimAge epigenetic clocks.
  2. **35** — Epigenetic Clocks Validated — The Buck Institute for Research on Aging independently confirmed these findings across 35 distinct epigenetic clocks, published in Aging Cell — one of the most comprehensive validations to date.
  3. **50+ yrs** — Established Safety Record — Therapeutic plasma exchange has a well-documented safety profile spanning more than 50 years of worldwide clinical use, making it one of the most established procedures in transfusion medicine.

### Section 4: What We Measure
- **Label**: BIOMARKER TRACKING
- **Heading**: What We Measure
- **Cards**:
  1. **Epigenetic Age**: Horvath clock, GrimAge, and PhenoAge measurements to quantify biological age before, during, and after treatment protocols.
  2. **Inflammatory Markers**: CRP, IL-6, TNF-alpha, and other key inflammatory biomarkers that correlate with accelerated aging and chronic disease.
  3. **Proteomic Profile**: Analysis of circulating plasma proteins — including pro-aging factors, damaged albumin, and inflammatory mediators — to track the rejuvenating effects of TPE.

### Section 5: FAQ
- **Q: What does 'biological age reversal' mean?** — Biological age is a measure of how old your body is at the cellular and molecular level, as distinct from your chronological age. Epigenetic clocks — which analyze patterns of DNA methylation — can estimate biological age with high accuracy. TPE has been shown to reduce biological age by 1-3 years, meaning your body functions at a measurably younger level after treatment.
- **Q: How is biological age measured?** — We use validated epigenetic clocks including the Horvath clock and GrimAge to measure biological age before and after treatment. These are considered the gold standard in aging research and are based on patterns of DNA methylation that change predictably with aging.
- **Q: How many treatments are needed for longevity?** — Longevity patients typically begin with an initial series of TPE treatments over several weeks, then transition to periodic maintenance sessions. The specific protocol is personalized during your consultation based on your biomarkers, health goals, and response to treatment.
- **Q: Am I a candidate for longevity TPE?** — Good candidates are generally healthy adults ages 40-80 who are interested in optimizing their healthspan and reducing biological age. The best way to determine candidacy is a free consultation with our physicians, who will review your health history and goals.

---

## Alzheimer's & Cognitive Decline Page

**Route**: `/treatments/alzheimers-cognitive-decline`
**Page Title**: Alzheimer's & Cognitive Decline
**Meta Description**: The AMBAR trial demonstrated 52-71% slowing of Alzheimer's progression with therapeutic plasma exchange. A safer alternative to monoclonal antibodies with no ARIA risk.

### Section 1: Hero
- **Label**: COGNITIVE HEALTH
- **Heading**: Alzheimer's & Cognitive Decline
- **Subtitle**: Evidence-based plasma exchange with albumin replacement, validated in the landmark AMBAR trial to slow cognitive and functional decline by 52-71%.

### Section 2: The AMBAR Trial
- **Label**: LANDMARK RESEARCH
- **Heading**: The AMBAR Trial: A Breakthrough for Alzheimer's
- **Paragraph 1**: The AMBAR (Alzheimer's Management By Albumin Replacement) trial is a landmark multicenter, randomized, double-blind, placebo-controlled study. This study enrolled 496 patients with mild-to-moderate Alzheimer's disease across sites in the United States and Europe.
- **Paragraph 2**: The results were striking: patients receiving therapeutic plasma exchange with albumin replacement showed 52-71% slowing of cognitive and functional decline compared to placebo. The treatment was well-tolerated with a safety profile consistent with over 50 years of TPE clinical use.
- **Paragraph 3**: The AMBAR trial suggests that removing aging and inflammatory plasma proteins — including amyloid-beta, tau fragments, and pro-inflammatory cytokines — and replacing them with purified albumin provides meaningful clinical benefit for Alzheimer's patients, particularly in the early-to-moderate stages of disease.

### Section 3: Key Results (dark background)
- **Label**: AMBAR RESULTS
- **Heading**: Clinical Evidence
- **Stat Cards**:
  1. **52-71%** — Slowing of Decline — Cognitive and functional decline was slowed by 52-71% in the treatment group compared to placebo across validated assessment scales.
  2. **496** — Patients Enrolled — Multicenter, randomized, double-blind, placebo-controlled trial across sites in the United States and Europe.
  3. **No ARIA** — Superior Safety Profile — Unlike monoclonal antibody treatments, TPE carries no risk of ARIA (brain swelling and microbleeds) — serious adverse events that have limited the adoption of newer Alzheimer's drugs.

### Section 4: TPE vs Monoclonal Antibodies
- **Label**: TREATMENT COMPARISON
- **Heading**: How TPE Compares to Other Alzheimer's Treatments
- **Paragraph 1**: FDA-approved monoclonal antibody treatments such as lecanemab and donanemab represent meaningful progress in Alzheimer's care. Like any treatment, they carry risks — most notably amyloid-related imaging abnormalities (ARIA), which include brain swelling and microbleeds in a subset of patients.
- **Paragraph 2**: Therapeutic plasma exchange offers a fundamentally different approach. Rather than targeting a single protein, TPE removes the full spectrum of aging and inflammatory factors from the blood — including amyloid-beta, tau, and pro-inflammatory cytokines — while replacing them with purified albumin.
- **Paragraph 3**: The AMBAR trial demonstrated comparable or superior efficacy in slowing decline, with a safety profile backed by over 50 years of clinical use and zero risk of ARIA.
- **Paragraph 4**: While TPE for Alzheimer's is not yet a mainstream first-line recommendation, the AMBAR trial results are among the most compelling clinical data in the field. For patients seeking an evidence-based option with a decades-long safety record, it represents a meaningful path forward — particularly for those who are not good candidates for monoclonal antibody therapies or who want to pursue treatment alongside conventional care.

### Section 5: FAQ
- **Q: How many treatments are needed?** — Alzheimer's patients typically follow protocols based on the AMBAR study design. The specific number and frequency of treatments is personalized during your consultation based on disease stage, biomarkers, and clinical response.
- **Q: Can TPE reverse Alzheimer's symptoms?** — The primary goal of TPE for Alzheimer's is slowing the progression of cognitive and functional decline, not reversal — and the AMBAR trial demonstrated this meaningfully. That said, in the mild Alzheimer's subgroup, some patients showed measurable improvement on global disease scales, suggesting that earlier intervention may offer the greatest benefit. Every patient is different, and outcomes depend on disease stage, overall health, and treatment consistency.
- **Q: Is TPE covered by insurance for Alzheimer's?** — Coverage for TPE in Alzheimer's disease varies by insurer and individual circumstances. While TPE is an established medical procedure covered for many conditions, its use in Alzheimer's is still emerging. Our team can help you understand your options during your free consultation.
- **Q: Who is a good candidate for TPE?** — Patients with mild-to-moderate Alzheimer's disease generally have the most to gain, as the AMBAR trial demonstrated the greatest benefit in this group. However, we evaluate each patient individually based on disease stage, overall health, and treatment goals. A free consultation with our physicians is the best way to determine candidacy.

### Section 6: CTA Band — "Ready to Begin?"

---

## Autoimmune Disorders Page

**Route**: `/treatments/autoimmune-disorders`
**Page Title**: Autoimmune Disorders
**Meta Description**: Therapeutic plasma exchange for autoimmune disorders including myasthenia gravis, Guillain-Barre, CIDP, MS, NMO, and autoimmune encephalitis.

### Section 1: Hero
- **Label**: AUTOIMMUNE
- **Heading**: Autoimmune Disorders
- **Subtitle**: Removing the circulating antibodies and inflammatory mediators that drive autoimmune disease — offering rapid relief when conventional treatments fall short.

### Section 2: How TPE Helps
- **Label**: THE MECHANISM
- **Heading**: How Plasma Exchange Treats Autoimmune Disease
- **Paragraph 1**: In autoimmune disorders, the immune system produces antibodies that mistakenly attack the body's own tissues — nerves, muscles, the blood-brain barrier, and other vital structures. These pathogenic antibodies circulate in the plasma, continuously driving inflammation and tissue damage.
- **Paragraph 2**: Therapeutic plasma exchange directly removes these antibodies, immune complexes, and inflammatory cytokines from the blood. Unlike immunosuppressive medications — which may take weeks or months to reduce antibody levels — TPE provides immediate reduction, offering rapid symptomatic relief in acute crises and improved disease control in chronic conditions.
- **Paragraph 3**: TPE is recognized as a first-line or second-line treatment for numerous autoimmune conditions by the American Society for Apheresis (ASFA), and Dr. Kiprov — a founding member of ASFA — has over 40 years of experience treating these conditions with therapeutic apheresis.

### Section 3: Conditions
- **Label**: CONDITIONS WE TREAT
- **Heading**: Autoimmune Conditions Responsive to TPE
- **Cards** (6):
  1. **Myasthenia Gravis**: TPE rapidly removes acetylcholine receptor antibodies that cause progressive muscle weakness, providing relief when conventional immunosuppression is inadequate or too slow to act.
  2. **Guillain-Barre Syndrome**: Therapeutic plasma exchange is a first-line treatment for GBS, removing the anti-ganglioside antibodies that attack peripheral nerves and cause ascending paralysis.
  3. **Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)**: TPE removes the pathogenic antibodies driving chronic nerve demyelination, offering an alternative or adjunct to IVIG therapy for patients with CIDP.
  4. **Multiple Sclerosis (Acute Relapses)**: For severe MS relapses that are refractory to high-dose corticosteroids, TPE can remove the inflammatory mediators and antibodies driving acute demyelination.
  5. **Neuromyelitis Optica (NMO)**: TPE targets aquaporin-4 antibodies, the primary driver of NMO, reducing the risk of devastating optic neuritis and transverse myelitis attacks.
  6. **Autoimmune Encephalitis**: Removal of pathogenic antibodies — including anti-NMDA receptor antibodies — that attack brain tissue, causing seizures, psychiatric symptoms, and cognitive decline.

### Section 4: FAQ
- **Q: How does TPE treat autoimmune disorders?** — In autoimmune disorders, the immune system produces antibodies that mistakenly attack the body's own tissues. TPE physically removes these pathogenic antibodies — along with immune complexes and inflammatory mediators — from the blood. This provides rapid symptomatic relief while other immunomodulatory therapies take effect.
- **Q: How quickly does TPE work for autoimmune conditions?** — Many patients experience improvement within days of their first treatment. Because TPE directly removes circulating pathogenic antibodies rather than waiting for medications to suppress antibody production, the onset of relief is typically much faster than with conventional immunosuppressive therapy alone.
- **Q: Is TPE used alone or with other treatments?** — TPE is often used in combination with immunosuppressive medications, corticosteroids, or IVIG depending on the specific condition. It can serve as a first-line treatment in acute crises or as an adjunct when conventional therapies provide insufficient control.
- **Q: Does insurance cover TPE for autoimmune conditions?** — TPE for many autoimmune neurological conditions — including myasthenia gravis, Guillain-Barre syndrome, and CIDP — is an established, guideline-supported therapy that may be covered by insurance depending on your plan. All costs and coverage options are discussed during your free consultation.

### Section 5: CTA Band — "Ready to Begin?"

---

## Post-Infectious Syndromes Page

**Route**: `/treatments/post-infectious-syndromes`
**Page Title**: Post-Infectious Syndromes — PANS/PANDAS & Long COVID
**Meta Description**: Therapeutic plasma exchange for PANS/PANDAS, Long COVID, and post-viral syndromes. Remove persistent autoantibodies and inflammatory factors driving ongoing symptoms.

### Section 1: Hero
- **Label**: POST-INFECTIOUS
- **Heading**: Post-Infectious Syndromes
- **Subtitle**: Immunomodulatory therapeutic plasma exchange for PANS/PANDAS, Long COVID, and other post-infectious conditions — clearing the persistent inflammatory factors that conventional treatments cannot address.

### Section 2: Overview
- **Label**: THE CHALLENGE
- **Heading**: When Infection Triggers Lasting Immune Dysfunction
- **Paragraph 1**: Infections can trigger persistent immune dysregulation that continues long after the original pathogen has been cleared. In conditions like PANS/PANDAS and Long COVID, the immune system produces autoantibodies and inflammatory mediators that circulate in the plasma, attacking the body's own tissues and driving debilitating symptoms.
- **Paragraph 2**: Conventional treatments — antibiotics, anti-inflammatories, immunosuppressants — address part of the problem but cannot physically remove the pathogenic autoantibodies and inflammatory factors already circulating in the blood. Therapeutic plasma exchange can.
- **Paragraph 3**: By removing and replacing the plasma, TPE eliminates the circulating autoantibodies, pro-inflammatory cytokines, microclot-promoting factors, and other pathogenic molecules that perpetuate post-infectious syndromes — often providing relief when other interventions have failed.

### Section 3: Conditions (3 large cards with tags)
1. **PANS / PANDAS** [Tag: Pediatric & Adult] — Pediatric Acute-onset Neuropsychiatric Syndrome (PANS) and PANDAS are triggered by infections — most commonly streptococcal — that produce autoantibodies attacking the basal ganglia. TPE removes these pathogenic antibodies, offering meaningful symptom improvement for neuropsychiatric symptoms including OCD, tics, anxiety, cognitive regression, and behavioral changes.
2. **Long COVID / Post-Acute Sequelae (PASC)** [Tag: Post-COVID Recovery] — Long COVID is characterized by persistent symptoms — fatigue, brain fog, autonomic dysfunction, and exercise intolerance — lasting weeks to months after acute infection. Growing evidence links these symptoms to persistent inflammatory factors, autoantibodies, and microclots circulating in the plasma. TPE removes these pathogenic factors that conventional treatments cannot address.
3. **Post-Viral Chronic Fatigue** [Tag: Persistent Fatigue] — Many patients develop chronic fatigue and immune dysregulation following viral infections beyond COVID-19 — including EBV, influenza, and other pathogens. TPE addresses the circulating inflammatory mediators and autoantibodies that perpetuate symptoms long after the infection has cleared.

### Section 4: Key Facts Band (dark background)
- **50+ yrs** — Safety Record
- **All Ages** — Pediatric & Adult
- **PANS** — PANDAS & Post-Viral

### Section 5: FAQ
- **Q: How does TPE help with PANS/PANDAS?** — In PANS/PANDAS, infections trigger the immune system to produce antibodies that cross-react with brain tissue — particularly the basal ganglia. TPE physically removes these pathogenic autoantibodies from the blood, offering meaningful improvement in neuropsychiatric symptoms such as OCD, tics, anxiety, rage episodes, and cognitive regression.
- **Q: Is TPE effective for Long COVID?** — Emerging research and clinical experience suggest that Long COVID symptoms are driven by persistent inflammatory factors, autoantibodies, and microclot formation in the plasma. TPE removes these pathogenic elements, and patients frequently report improvement in fatigue, brain fog, and autonomic symptoms. While large-scale trials are ongoing, the mechanistic rationale is strong and supported by case series and early clinical data.
- **Q: Can adults have PANS/PANDAS?** — Yes. While PANS/PANDAS was originally described in children, it is increasingly recognized in adolescents and adults. The underlying mechanism — infection-triggered autoantibodies attacking the brain — can occur at any age. Our physicians evaluate adult patients presenting with acute-onset neuropsychiatric symptoms consistent with PANS.
- **Q: How many treatments are needed for post-infectious syndromes?** — The number of treatments varies by condition and severity. A personalized protocol is designed during your consultation based on your specific symptoms and biomarkers.
- **Q: My child has been diagnosed with PANDAS. Is TPE appropriate?** — TPE can be highly effective for PANDAS, particularly in moderate-to-severe cases or when symptoms are acute and disabling. Our physicians have extensive experience with PANDAS patients and will evaluate whether TPE is appropriate based on your child's clinical presentation, lab findings, and prior treatment history. We recommend scheduling a free consultation to discuss your child's specific situation.

### Section 6: CTA Band — "Ready to Begin?"

---

## Cytoreduction & Stem Cell Page

**Route**: `/treatments/cytoreduction-stem-cell`
**Page Title**: Cytoreduction & Stem Cell Collections
**Meta Description**: Specialized apheresis for white blood cell reduction and peripheral blood stem cell collection by board-certified specialists.

### Section 1: Hero (via TreatmentLayout)
- **Label**: HEMATOLOGY
- **Heading**: Cytoreduction & Stem Cell Collections
- **Subtitle**: Specialized apheresis for white blood cell reduction and stem cell harvesting by board-certified specialists.

### Section 2: Overview
- **Label**: SPECIALIZED APHERESIS
- **Heading**: Targeted Cellular Therapies
- **Paragraph 1**: Beyond therapeutic plasma exchange, apheresis technology enables the selective removal or collection of specific cellular components from the blood. These procedures are critical in hematologic emergencies, transplant preparation, and the management of myeloproliferative disorders.
- **Paragraph 2**: At Global Apheresis, all cytoreduction and stem cell collection procedures are performed by board-certified physicians with specialized training in therapeutic apheresis, using advanced apheresis equipment that allows precise cellular separation and collection.

### Section 3: Services
- **Label**: PROCEDURES
- **Heading**: What We Offer
- **Cards** (2):
  1. **Leukapheresis (White Blood Cell Reduction)**: Selective removal of excess white blood cells in patients with elevated WBC counts. Global Apheresis offers leukapheresis on an outpatient basis for select non-emergency indications, providing a targeted approach to white blood cell reduction outside of the acute hospital setting.
  2. **Peripheral Blood Stem Cell Collection**: Global Apheresis has the clinical infrastructure to support peripheral blood stem cell collection and is actively developing partnerships with transplant programs and biotech companies. Contact us to discuss potential collaboration.

### Section 4: FAQ
- **Q: What is cytoreduction?** — Cytoreduction refers to the therapeutic reduction of specific blood cell populations — such as white blood cells or platelets — when they are dangerously elevated. Apheresis-based cytoreduction is often faster and more targeted than medication alone, making it critical in acute situations.
- **Q: How are stem cells collected with apheresis?** — After stem cells are mobilized into the peripheral blood using growth factors, the patient undergoes apheresis. The machine draws blood, selectively collects the stem cells (identified by CD34+ markers), and returns all other blood components. The process typically takes 3-5 hours and may require one or more sessions.
- **Q: Is this different from therapeutic plasma exchange?** — Yes. While TPE exchanges the liquid portion of blood (plasma), cytoreduction and stem cell collection target specific cellular components — white blood cells, platelets, or stem cells. Both procedures use apheresis technology but serve different clinical purposes.
- **Q: Who needs these procedures?** — These specialized apheresis procedures are typically indicated for patients with specific hematologic or infectious conditions, or those preparing for stem cell transplantation. Unlike many centers, Global Apheresis evaluates each patient individually. If you or your physician believe one of these procedures may be appropriate for your situation, we welcome you to reach out directly for a consultation — no referral required.

---

## Lipid Apheresis Page

**Route**: `/treatments/lipid-apheresis`
**Page Title**: Lipid Apheresis
**Meta Description**: Targeted removal of LDL cholesterol and lipoprotein(a) for patients with familial hypercholesterolemia and elevated Lp(a). Coming soon to Global Apheresis.

**Status**: COMING SOON

### Section 1: Hero (via TreatmentLayout)
- **Label**: COMING SOON (overrides "Cardiovascular" label when comingSoon is true)
- **Heading**: Lipid Apheresis
- **Subtitle**: Targeted removal of LDL cholesterol and lipoprotein(a) beyond what medications alone can achieve.

### Section 2: About This Treatment
- **Label**: ABOUT THIS TREATMENT
- **Heading**: A New Approach to Cardiovascular Risk
- **Paragraph 1**: Lipid apheresis is a specialized procedure that selectively removes LDL cholesterol and lipoprotein(a) — or Lp(a) — from the blood. For patients with familial hypercholesterolemia, dangerously elevated Lp(a), or cardiovascular risk that cannot be adequately managed with statins and other medications alone, lipid apheresis offers a powerful therapeutic option.
- **Paragraph 2**: Unlike therapeutic plasma exchange, which replaces the entire plasma volume, lipid apheresis uses selective adsorption technology to target and remove specific lipid particles while returning the remainder of the plasma to the patient. This allows for highly targeted cholesterol reduction in a single session.
- **Paragraph 3**: Global Apheresis is developing a lipid apheresis program that will bring this advanced treatment to patients in the Bay Area and beyond. Contact us to learn more and be the first to know when this service becomes available.
- **Paragraph 4**: In addition, lipid apheresis has shown promise in the treatment of Focal Segmental Glomerulosclerosis (FSGS) — a kidney disease driven in part by circulating permeability factors. By removing these pathogenic molecules, lipid apheresis may help reduce proteinuria and slow disease progression. We are actively developing protocols for FSGS alongside our cardiovascular lipid apheresis program.

### Section 3: Who May Benefit
- **Label**: IDEAL CANDIDATES
- **Heading**: Who May Benefit
- **Cards** (4):
  1. **Familial Hypercholesterolemia**: Patients with genetic conditions causing extremely elevated LDL that is resistant to maximum-dose statin therapy.
  2. **Elevated Lipoprotein(a)**: Lp(a) is a genetically determined cardiovascular risk factor with no FDA-approved medication. Lipid apheresis is the only established method to significantly reduce Lp(a) levels.
  3. **Statin-Intolerant Patients**: Patients who cannot tolerate statin medications due to side effects but require aggressive LDL reduction for cardiovascular risk management.
  4. **FSGS & Kidney Disease**: Patients with Focal Segmental Glomerulosclerosis (FSGS) driven by circulating permeability factors. Lipid apheresis may reduce proteinuria and slow disease progression.

### CTA Band: "Interested in This Treatment?" → Contact Us

---

## Super Albumin Page

**Route**: `/treatments/super-albumin`
**Page Title**: Super Albumin
**Meta Description**: A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors. Coming soon.

**Status**: COMING SOON

### Section 1: Hero (via TreatmentLayout)
- **Label**: COMING SOON (overrides "Next Generation")
- **Heading**: Super Albumin
- **Subtitle**: A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors.

### Section 2: About
- **Label**: THE INNOVATION
- **Heading**: A New Class of IV Therapy
- **Body**: Super Albumin is a proprietary IV infusion therapy — not a plasma exchange procedure — delivering a specially enhanced albumin solution enriched with vitamins, antioxidants, and therapeutic cofactors directly into the bloodstream. It can be used as a standalone treatment for its potent anti-inflammatory and antioxidant properties, or administered between TPE sessions as a bridge therapy to maintain and amplify treatment benefits. It is not used as a replacement fluid during plasma exchange.

### Section 3: Benefits
- **Label**: POTENTIAL BENEFITS
- **Heading**: Why Enhanced Albumin Matters
- **Cards** (3):
  1. **Enhanced Anti-Inflammatory Action**: Additional antioxidants and anti-inflammatory cofactors may amplify albumin's natural ability to neutralize oxidative stress and reduce systemic inflammation.
  2. **Improved Nutrient Delivery**: Albumin is the body's primary transport protein. Enhanced formulations can optimize the delivery of therapeutic vitamins and cofactors directly into the circulation.
  3. **Complements TPE**: Super Albumin works alongside therapeutic plasma exchange as a bridge therapy between sessions — maintaining and extending the anti-inflammatory benefits of treatment without replacing plasma during the procedure itself.

### CTA Band: "Interested in This Treatment?" → Contact Us

---

## Physicians Page

**Route**: `/physicians`
**Page Title**: Our Physicians & Team
**Meta Description**: Meet the Global Apheresis team led by Dr. Dobri Kiprov and Dr. Alexander Green — board-certified specialists in therapeutic apheresis with decades of combined experience.

### Section 1: Hero
- **Label**: OUR TEAM
- **Heading**: Led by the Pioneers of Therapeutic Apheresis
- **Subtitle**: Board-certified physicians and certified apheresis nurses with decades of combined experience.

### Section 2: Lead Physicians

#### Dr. Dobri Kiprov
- **Role Label**: FOUNDER & MEDICAL DIRECTOR
- **Full Name**: Dr. Dobri Kiprov, M.D., H.P. (ASCP)
- **Bio Paragraph 1**: Dr. Kiprov is a globally recognized authority in therapeutic apheresis — one of the physicians who established therapeutic plasma exchange as a clinical discipline over 40 years ago. He completed his fellowship in Clinical Immunology and Immunopathology at Massachusetts General Hospital / Harvard Medical School under an NIH-sponsored program.
- **Bio Paragraph 2**: He became the first U.S. physician to pass the Hemapheresis Practitioner Exam (ASCP), and went on to serve as Chief of the Division of Immunotherapy, Emeritus at California Pacific Medical Center. He is a founding member of both ASFA and The Journal of Clinical Apheresis.
- **Bio Paragraph 3**: Dr. Kiprov has been honored with three of ASFA's highest awards: the Presidential Award, the Lecturers Award, and the Francis Morrison Memorial Award. He has authored over 100 peer-reviewed publications and overseen more than 15,000 therapeutic apheresis treatments.
- **Tags**: ASFA Founding Member, 100+ Publications, 15,000+ Treatments, Harvard / MGH Fellowship

#### Dr. Allen Green
- **Role Label**: ASSOCIATE MEDICAL DIRECTOR
- **Full Name**: Dr. Allen Green, M.D.
- **Bio Paragraph 1**: Dr. Allen Green is a board-certified clinical pathologist specializing in therapeutic apheresis. A graduate of the Medical University of South Carolina, he completed his residency at UT Southwestern Medical Center and served in the United States Air Force.
- **Bio Paragraph 2**: With over 500 therapeutic plasma exchange procedures to his name, Dr. Green previously established TPE protocols for Alzheimer's disease and cognitive enhancement at a leading longevity clinic in Dallas before joining Global Apheresis.
- **Bio Paragraph 3**: As Associate Medical Director, Dr. Green oversees clinical operations, supports the affiliate network, and works directly with patients seeking longevity optimization and neurodegenerative treatment.
- **Tags**: Board-Certified Clinical Pathology, UT Southwestern, 500+ TPE Procedures, ASFA Member

### Section 3: Leadership & Clinical Staff
- **Label**: LEADERSHIP & CLINICAL STAFF
- **Heading**: The Team Behind the Practice
- **Team members** (4, displayed in a grid with photos):
  1. **Keeli Rose** — Chief Operating Officer
  2. **Regina Rohe, RN** — Senior Vice President
  3. **Chelo Roska-Pamaong, RN** — Vice President of Nursing
  4. **Ashley Campbell** — Director of Marketing

### Section 4: CTA Band — "Ready to Begin?"

---

## Affiliates Page

**Route**: `/affiliates`
**Page Title**: Affiliate Program for Physicians
**Meta Description**: Bring therapeutic apheresis to your practice. Global Apheresis offers turnkey affiliate programs with physician training, equipment, and medical directorship.

### Section 1: Hero
- **Label**: FOR PROVIDERS & PARTNERS
- **Heading**: Bring Therapeutic Apheresis to Your Practice
- **Subtitle**: A turn-key affiliate partnership backed by the pioneers of the field.

### Section 2: Program Overview
- **Body**: Global Apheresis offers a complete turn-key solution for clinics and providers who want to offer therapeutic apheresis — backed by the pioneers of the field. Our affiliate program is designed for longevity clinics, integrative medicine practices, oncology centers, and specialty care providers.

### Section 3: What We Provide
- **Label**: WHAT WE PROVIDE
- **Heading**: Everything You Need to Succeed
- **Cards** (4, numbered 01-04):
  1. **Physician & Staff Training**: Comprehensive certification for physicians, NPs, PAs, and nurses in Dr. Kiprov's proprietary protocols — built on 40+ years of clinical expertise.
  2. **Equipment & Supplies**: Full access to apheresis equipment, albumin, replacement fluids, and consumables — everything your clinic needs to perform TPE on day one.
  3. **Medical Directorship**: Multiple tiers of medical directorship and ongoing clinical consultation, ensuring your program meets the highest standards of care.
  4. **Marketing & Operational Support**: Co-branded patient education materials, marketing resources, and implementation guidance to help you launch and grow your apheresis program.

### Section 4: Stats Band (dark background)
- **40+** — Years of Protocol Development
- **Turn-Key** — Launch in Weeks, Not Months
- **Multi-State** — Active Affiliate Network
- **Full Support** — Training, Supplies & Marketing

### Section 5: Dr. Kaplan Feature
- **Label**: AFFILIATE PARTNER
- **Heading**: Gary Kaplan, D.O.
- **Bio**: Dr. Gary Kaplan is the founder and medical director of the Kaplan Center for Integrative Medicine in McLean, Virginia — one of the country's leading integrative medicine practices. Board-certified in both Family Medicine and Pain Medicine, Dr. Kaplan partnered with Global Apheresis to bring therapeutic plasma exchange to the Washington, D.C. area, making the Kaplan Center the first outpatient TPE clinic in the region. Working under Dr. Kiprov's clinical guidance, the Kaplan Center now offers TPE for Alzheimer's disease, Long COVID, PANS/PANDAS, and longevity support.
- **Quote**: "We are particularly excited because we're going to be able to bring this technology to Northern Virginia, which we've been trying to do for the last four years — and Dr. Kiprov has now made it possible for us to be able to do that."
- **Attribution**: — Dr. Gary Kaplan, D.O., Kaplan Center for Integrative Medicine

### Section 6: How to Get Started
- **Label**: GET STARTED
- **Heading**: Three Steps to Launch
- **Steps**:
  1. **01 — Initial Consultation**: Schedule a call with our affiliate team to discuss your practice, patient population, and goals. We'll walk you through the program in detail.
  2. **02 — Training & Setup**: Your physicians and clinical staff receive hands-on training in Dr. Kiprov's protocols. We help you source equipment, supplies, and configure your treatment space.
  3. **03 — Launch & Grow**: Begin treating patients with full ongoing support — from clinical consultation and quality assurance to marketing and patient acquisition.

### Section 7: CTA Band
- **Heading**: Ready to Explore a Partnership?
- **Body**: Contact our affiliate team to learn how you can bring evidence-based therapeutic apheresis to your patients.
- **CTA**: Contact Our Affiliate Team → `/contact`

---

## About Page

**Route**: `/about`
**Page Title**: Our Story
**Meta Description**: Since 1985, Dr. Dobri Kiprov has pioneered therapeutic apheresis. Learn about the history of Global Apheresis and our mission to advance plasma exchange medicine.

### Section 1: Hero
- **Label**: OUR STORY
- **Heading**: Pioneering Therapeutic Apheresis Since 1985
- **Subtitle**: Four decades of clinical innovation, one mission: to transform lives through the science of blood purification.

### Section 2: Mission Quote
- **Quote**: "The plasma carries the story of aging and disease. When we exchange it, we give the body a chance to rewrite that story."
- **Attribution**: DR. DOBRI KIPROV, M.D.

### Section 3: Philosophy
- **Label**: PHILOSOPHY
- **Heading**: Medicine the Way It Should Be
- **Italic subtitle**: A practice built on principle, not volume.
- **Paragraph 1**: At Global Apheresis, we believe that every patient deserves a physician who takes the time to understand not just their diagnosis, but their life. Therapeutic apheresis is a powerful tool — but it is only as good as the clinical judgment behind it.
- **Paragraph 2**: We founded this practice on a simple principle: do right by the patient. That means honest conversations about what the evidence shows and where it is still evolving. It means personalized protocols, not one-size-fits-all treatment plans. And it means measuring outcomes, not just administering procedures.

### Section 4: What Makes Us Different
- **Label**: WHAT MAKES US DIFFERENT
- **Heading**: Depth of Experience You Won't Find Elsewhere
- **Italic subtitle**: The nation's leading outpatient apheresis practice.
- **Paragraph 1**: Global Apheresis is one of the only outpatient practices in the United States dedicated exclusively to therapeutic apheresis. While most patients encounter this procedure only in hospital settings — often as a last resort — we have spent decades making it accessible, safe, and effective in an outpatient environment.
- **Paragraph 2**: Our physicians have performed more procedures, published more research, and trained more practitioners in this field than virtually anyone in the country. When you come to us, you are not receiving care from someone who offers apheresis as one of many services. This is all we do, and we do it at the highest level.

### Section 5: Your Visit
- **Label**: YOUR VISIT
- **Heading**: A Different Kind of Medical Experience
- **Italic subtitle**: Thoughtful care in a setting designed for healing.
- **Paragraph 1**: Our clinic in Mill Valley reflects the care we put into every aspect of your treatment. Set among the redwood groves of Marin County, it is a calm, private setting designed to put patients at ease. Treatment sessions typically last two to three hours — time our patients often describe as unexpectedly peaceful.
- **Paragraph 2**: You will always see a physician. Your protocol will be reviewed and adjusted based on your biomarkers and response. And you will never feel like a number.

### Section 6: Timeline
- **Label**: 40+ YEARS OF INNOVATION
- **Heading**: Our Journey
- **Timeline entries**:
  1. **1985** — A Field Is Born — Dr. Kiprov founds Bay Area Mobile Apheresis — the first mobile therapeutic plasma exchange program in the United States.
  2. **1992** — Taking Root in San Francisco — Dr. Kiprov establishes the Center for Apheresis and Immunology in San Francisco, advancing outpatient TPE for autoimmune and neurological conditions.
  3. **2020** — A Breakthrough for Alzheimer's — The landmark AMBAR study demonstrates that therapeutic plasma exchange slows Alzheimer's progression by 52-71% — a turning point for the field.
  4. **2021** — A New Chapter — Dr. Kiprov founds Global Apheresis in Mill Valley, CA to bring therapeutic apheresis to a wider population through direct patient care and physician affiliates.
  5. **2022** — Science Catches Up — Published in GeroScience, Dr. Kiprov's study provides the first clinical proof that TPE reduces biological age by 1-3 years as measured by epigenetic clocks.
  6. **2025** — Validation at the Frontier — In partnership with the Buck Institute for Research on Aging, new data published in Aging Cell further validates the rejuvenating effects of plasma exchange.

### Section 7: CTA Band — "Ready to Begin?"

---

## Blog Page

**Route**: `/blog`
**Page Title**: Research & Insights
**Meta Description**: The latest research, clinical insights, and news from Global Apheresis on therapeutic plasma exchange, longevity, and Alzheimer's treatment.

### Section 1: Hero
- **Label**: RESEARCH & INSIGHTS
- **Heading**: The Global Apheresis Blog
- **Subtitle**: Exploring the science of therapeutic apheresis, clinical breakthroughs, and what they mean for your health.

### Section 2: Featured Video
- **Label**: FEATURED VIDEO
- **Heading**: Latest from Global Apheresis
- **YouTube embed**: Video ID `LlD84yXxdGI`
- **Description text**: Subscribe to the **Global Apheresis** YouTube channel for the latest on therapeutic plasma exchange, clinical research, and patient stories.
- **Link**: Visit Channel → https://www.youtube.com/@GlobalApheresis

### Section 3: Articles Grid
- **Label**: FROM THE PRACTICE
- **Heading**: Articles
- Cards are generated from markdown files (see [Blog System](#blog-system--content)). Each card shows: category tag, date, title, excerpt, and "Read Article →" link.

### Section 4: Publications Placeholder
- **Label**: COMING IN PHASE 2
- **Heading**: Peer-Reviewed Publications
- **Body**: A curated library of Dr. Kiprov's published research, clinical papers, and peer-reviewed studies on therapeutic plasma exchange will be available here soon. Check back for downloadable PDFs and direct links to journal publications.

### Section 5: CTA Band
- **Heading**: Have Questions? Talk to a Physician
- **Body**: Schedule a free consultation with our physicians to discuss whether therapeutic apheresis is right for you.
- **CTA**: Book a Free Consultation → `/free-consultation`

---

## Contact Page

**Route**: `/contact`
**Page Title**: Contact Us
**Meta Description**: Contact Global Apheresis at 655 Redwood Highway, Suite 370, Mill Valley, CA. Call (415) 928-1352 or email info@globalapheresis.com.

### Section 1: Hero
- **Label**: GET IN TOUCH
- **Heading**: Contact Global Apheresis
- **Subtitle**: We welcome your questions. Reach out by phone, email, or visit us in Mill Valley.

### Section 2: Contact Details + Form
**Left column — Contact Info**:
- **Label**: VISIT US
- **Heading**: Our Mill Valley Clinic
- **Address**: 655 Redwood Highway, Suite 370 / Mill Valley, CA 94941
- **Phone**: (415) 928-1352
- **Email**: info@globalapheresis.com
- **Hours**: Monday - Friday: 9:00 AM - 5:00 PM / Saturday - Sunday: Closed

**Right column — Contact Form**:
- **Form Heading**: Send Us a Message
- **Fields**:
  - Full Name (text) — placeholder: "Your name"
  - Email Address (email) — placeholder: "you@email.com"
  - Phone Number (tel) — placeholder: "(555) 000-0000"
  - Message (textarea, 5 rows) — placeholder: "How can we help you?"
- **Submit Button**: Send Message →

### Section 3: Google Maps Embed
- Embedded Google Maps iframe for 655 Redwood Highway Suite 370 Mill Valley CA 94941

---

## Free Consultation Page

**Route**: `/free-consultation`
**Page Title**: Book a Free Consultation
**Meta Description**: Schedule a free consultation with Global Apheresis. Speak with our physicians about therapeutic plasma exchange for longevity, Alzheimer's, autoimmune disorders, and more.

### Section 1: Hero
- **Label**: GET STARTED
- **Heading**: Book Your Free Consultation
- **Subtitle**: Take the first step toward optimizing your health with a complimentary consultation with our physicians.

### Section 2: What to Expect + Form
**Left column — What to Expect**:
- **Label**: WHAT TO EXPECT
- **Heading**: Your Consultation, *Simplified*
- **Bullet points**:
  - A one-on-one conversation with one of our physicians
  - Discussion of your health goals and medical history
  - Overview of treatment options and expected outcomes
  - Personalized protocol recommendation
  - Transparent discussion of costs and scheduling
  - No commitment — the decision is always yours
- **Phone fallback**: Prefer to call? (415) 928-1352

**Right column — Consultation Form**:
- **Form Heading**: Request a Consultation
- **Fields**:
  - Full Name (text) — placeholder: "Your name"
  - Email Address (email) — placeholder: "you@email.com"
  - Phone Number (tel) — placeholder: "(555) 000-0000"
  - Area of Interest (select dropdown):
    - "Select a treatment area" (default/placeholder)
    - Longevity & Health Optimization
    - Alzheimer's & Cognitive Decline
    - Autoimmune Disorders
    - Post-Infectious Syndromes
    - Cytoreduction & Stem Cell
    - Other / Not Sure
  - Message (Optional) (textarea, 4 rows) — placeholder: "Tell us about your goals or ask a question..."
- **Submit Button**: Request Consultation →

### Section 3: How It Works
- **Label**: HOW IT WORKS
- **Heading**: Five Simple Steps
- **Steps** (5):
  1. **01 — Free Consultation**: Speak with one of our physicians about your health goals and whether TPE is right for you. No commitment required.
  2. **02 — Medical Evaluation**: We review your labs and health history to design a personalized protocol. Telemedicine appointments are available.
  3. **03 — Treatment at Our Clinic**: Relax in our Mill Valley clinic while the apheresis machine gently processes your blood. Sessions take 2-3 hours — you can read, work, or watch a show.
  4. **04 — Biomarker Monitoring**: We track your response through epigenetic clocks and clinical biomarkers, adjusting your protocol as needed.
  5. **05 — Long-Term Protocol**: Most patients benefit from periodic maintenance treatments. We develop a long-term plan tailored to your goals.

### Section 4: FAQ
- **Label**: COMMON QUESTIONS
- **Heading**: Frequently Asked Questions
- **Q: What is therapeutic plasma exchange?** — TPE is a medical procedure where blood passes through an apheresis machine that separates plasma — the liquid portion containing inflammatory proteins and aging factors — from blood cells. The plasma is removed and replaced with purified albumin solution, while your cells are returned. It has been performed safely for over 50 years.
- **Q: What conditions do you treat?** — We treat longevity optimization and biological age reduction, Alzheimer's disease and mild cognitive impairment, Long COVID and post-acute sequelae, autoimmune conditions and PANDAS, and provide cytoreduction and stem cell collections. We are also adding Lipid Apheresis and Super Albumin therapy soon.
- **Q: How long does a treatment take?** — A typical TPE session takes 2-3 hours. Patients remain awake and comfortable throughout — you can read, work on a laptop, or watch a show. Most patients drive themselves home afterward.
- **Q: Am I a candidate?** — Good candidates are generally healthy adults who are interested in optimizing their healthspan. We also evaluate patients with Alzheimer's, Long COVID, autoimmune disease, and PANDAS. The best way to determine candidacy is a free consultation with our physicians.
- **Q: How many treatments will I need?** — This depends on your goals and condition. Longevity patients often begin with an initial series and then transition to periodic maintenance. Alzheimer's patients follow AMBAR study-based protocols. A personalized plan is created during your consultation.
- **Q: Is this safe?** — TPE has a well-established 50-year safety record. Serious complications are rare when performed by trained specialists. Dr. Kiprov has personally overseen thousands of procedures, and all treatments are administered by board-certified physicians and certified apheresis nurses using established clinical protocols.
- **Q: Does insurance cover TPE for longevity?** — TPE for longevity optimization is generally not covered by insurance and is self-pay. TPE for certain approved indications — such as autoimmune or some neurological conditions — may have coverage depending on your plan. All costs and options are discussed during your free consultation.
- **Q: I'm a physician — how can I offer TPE in my practice?** — We offer a comprehensive turn-key affiliate program that includes physician and staff training, equipment access, protocol support, medical directorship, and marketing resources. Visit our Affiliates page or contact us to learn more.

---

## Footer

### Brand Section
- **Brand Name**: Global Apheresis
- **Tagline**: Pioneering therapeutic apheresis in the San Francisco Bay Area since the 1980s.
- **Social Label**: Follow our research
- **Social Links**:
  - YouTube → https://www.youtube.com/@globalapheresis
  - LinkedIn → https://www.linkedin.com/in/dobri-kiprov-2963ab31/
  - Instagram → https://www.instagram.com/globalapheresis

### Practice Column
- **Heading**: PRACTICE
- Links: Our Story (`/about`), Treatments (`/treatments`), Physicians (`/physicians`), Contact (`/contact`)

### Resources Column
- **Heading**: RESOURCES
- Links: Affiliate Program (`/affiliates`), Research & Blog (`/blog`)

### Connect Column
- **Heading**: CONNECT
- (415) 928-1352
- info@globalapheresis.com
- Mill Valley, CA 94941

### Bottom Bar
- (c) [current year] Global Apheresis. All rights reserved.

---

## Blog System & Content

### Storage
Blog posts are stored as markdown files in `content/blog/` with YAML frontmatter.

### Frontmatter Fields
```yaml
---
title: "Post Title"
date: "Month Year"
category: "Research" | "Article"
excerpt: "Brief description for cards and meta."
slug: "url-friendly-slug"
---
```

### Existing Posts

**Post 1**: `2026-01-15-understanding-ambar-trial-alzheimers.md`
- Title: Understanding the AMBAR Trial: What It Means for Alzheimer's
- Date: January 2026
- Category: Research
- Excerpt: The landmark AMBAR study demonstrated that therapeutic plasma exchange slowed Alzheimer's progression by 52-71%. Here's what the data tells us — and what it could mean for patients and families.
- Slug: understanding-ambar-trial-alzheimers
- Body: Full article coming soon.

**Post 2**: `2025-12-10-how-tpe-reduces-biological-age.md`
- Title: How Therapeutic Plasma Exchange Reduces Biological Age
- Date: December 2025
- Category: Article
- Excerpt: Published in GeroScience, Dr. Kiprov's 2022 study provided the first clinical proof that TPE can reverse epigenetic aging by 1-3 years. We break down the science behind this breakthrough.
- Slug: how-tpe-reduces-biological-age
- Body: Full article coming soon.

**Post 3**: `2025-11-05-what-to-expect-first-tpe-session.md`
- Title: What to Expect During Your First TPE Session
- Date: November 2025
- Category: Article
- Excerpt: From the initial consultation to your first treatment day, here's a step-by-step guide to help you feel prepared and comfortable before your therapeutic plasma exchange session.
- Slug: what-to-expect-first-tpe-session
- Body: Full article coming soon.

---

## Treatments Data

The treatments list in `lib/treatments.ts` drives the Treatments Overview page cards and the Related Treatments sections on individual treatment pages.

| Title | Slug | Tags | Coming Soon |
|-------|------|------|-------------|
| Therapeutic Plasma Exchange | therapeutic-plasma-exchange | Longevity, Alzheimer's, Long COVID, Autoimmune, PANDAS | No |
| Cytoreduction & Stem Cell Collections | cytoreduction-stem-cell | Hematology, Transplant Support, Stem Cells | No |
| Lipid Apheresis | lipid-apheresis | Cardiovascular, Cholesterol, Lp(a) | Yes |
| Super Albumin | super-albumin | Longevity, Anti-Inflammatory, Antioxidant | Yes |

Note: Condition-specific cards (Longevity Optimization, Alzheimer's & Cognitive Decline, Autoimmune Disorders, Post-Infectious Syndromes) were removed from this data array. Those pages still exist and are linked from the TPE page and navigation dropdown, but they no longer appear as cards on the Treatments Overview page.

### Treatment Descriptions (from lib/treatments.ts)
1. **Therapeutic Plasma Exchange**: Our signature treatment removes aging plasma proteins, pro-inflammatory factors, and disease-associated molecules — replacing them with purified albumin. Clinically shown to reduce biological age and slow Alzheimer's progression.
2. **Cytoreduction & Stem Cell Collections**: Specialized apheresis for white blood cell reduction and stem cell harvesting by board-certified specialists using advanced apheresis technology.
3. **Lipid Apheresis**: Targeted removal of LDL cholesterol and lipoprotein(a) beyond what medications alone can achieve. Ideal for familial hypercholesterolemia and elevated cardiovascular risk.
4. **Super Albumin**: A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors — designed as a standalone treatment or bridge therapy between TPE sessions.

---

## SEO / Meta

### Global Metadata (layout.tsx)
- **Default Title**: Global Apheresis — Therapeutic Apheresis in Mill Valley, CA
- **Title Template**: %s | Global Apheresis
- **Default Description**: Pioneering therapeutic apheresis for over 40 years. Led by Dr. Dobri Kiprov. Treatments for Alzheimer's, autoimmune disorders, longevity, and more.
- **Site Name**: Global Apheresis
- **URL**: https://globalapheresis.com
- **OG Image**: /images/ga-sphere-only.png (512x512)

### Per-Page Titles and Descriptions
| Page | Title | Description |
|------|-------|-------------|
| Homepage | Global Apheresis — Therapeutic Apheresis in Mill Valley, CA | (uses default) |
| Treatments | Treatments | Comprehensive therapeutic apheresis treatments including plasma exchange for longevity, Alzheimer's, autoimmune disorders, PANS/PANDAS, Long COVID, and more. |
| TPE | Therapeutic Plasma Exchange (TPE) | Therapeutic plasma exchange removes aging factors, inflammatory proteins, and disease-associated molecules from your blood. Over 50 years of established safety. |
| Longevity | Longevity Optimization | Evidence-based therapeutic plasma exchange shown to reduce biological age by 1-3 years. Validated by the Buck Institute across 35 epigenetic clocks. |
| Alzheimer's | Alzheimer's & Cognitive Decline | The AMBAR trial demonstrated 52-71% slowing of Alzheimer's progression with therapeutic plasma exchange. A safer alternative to monoclonal antibodies with no ARIA risk. |
| Autoimmune | Autoimmune Disorders | Therapeutic plasma exchange for autoimmune disorders including myasthenia gravis, Guillain-Barre, CIDP, MS, NMO, and autoimmune encephalitis. |
| Post-Infectious | Post-Infectious Syndromes — PANS/PANDAS & Long COVID | Therapeutic plasma exchange for PANS/PANDAS, Long COVID, and post-viral syndromes. Remove persistent autoantibodies and inflammatory factors driving ongoing symptoms. |
| Cytoreduction | Cytoreduction & Stem Cell Collections | Specialized apheresis for white blood cell reduction and peripheral blood stem cell collection by board-certified specialists. |
| Lipid Apheresis | Lipid Apheresis | Targeted removal of LDL cholesterol and lipoprotein(a) for patients with familial hypercholesterolemia and elevated Lp(a). Coming soon to Global Apheresis. |
| Super Albumin | Super Albumin | A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors. Coming soon. |
| Physicians | Our Physicians & Team | Meet the Global Apheresis team led by Dr. Dobri Kiprov and Dr. Alexander Green — board-certified specialists in therapeutic apheresis with decades of combined experience. |
| Affiliates | Affiliate Program for Physicians | Bring therapeutic apheresis to your practice. Global Apheresis offers turnkey affiliate programs with physician training, equipment, and medical directorship. |
| About | Our Story | Since 1985, Dr. Dobri Kiprov has pioneered therapeutic apheresis. Learn about the history of Global Apheresis and our mission to advance plasma exchange medicine. |
| Blog | Research & Insights | The latest research, clinical insights, and news from Global Apheresis on therapeutic plasma exchange, longevity, and Alzheimer's treatment. |
| Contact | Contact Us | Contact Global Apheresis at 655 Redwood Highway, Suite 370, Mill Valley, CA. Call (415) 928-1352 or email info@globalapheresis.com. |
| Free Consultation | Book a Free Consultation | Schedule a free consultation with Global Apheresis. Speak with our physicians about therapeutic plasma exchange for longevity, Alzheimer's, autoimmune disorders, and more. |

---

## Key Content Rules

### Language Restrictions
- **Never say "proven"** for longevity or age reversal claims. Use "shown to", "demonstrated", "clinically validated", or "evidence-based" instead.
- **Never say "rapid relief" for PANS/PANDAS**. Use "meaningful improvement" or "meaningful symptom improvement" instead. The sentence "Many patients show significant improvement within days of treatment" was specifically removed.
- **Never say "cure"** for any condition. TPE slows progression, reduces biological age, removes pathogenic factors — but does not cure.
- **Never overstate Alzheimer's claims**. The primary goal is slowing progression, not reversal. The AMBAR trial showed 52-71% slowing of decline.

### Research Attribution Rules
- **TPE page (Kim et al.)**: On the TPE page research card, the GeroScience 2022 study is attributed to "Kim et al. (2022)" with Dr. Kiprov noted as co-author and clinical collaborator. This is because Kim was first author on this paper.
- **Longevity page (Kiprov et al.)**: On the Longevity page, the same study is referenced as "Kiprov et al. (2022)" — this is acceptable on the longevity page context.
- **Two separate papers**: The GeroScience 2022 paper (biological age reduction) and the Aging Cell paper (Buck Institute validation across 35 clocks) are two separate publications and should not be conflated.
- **Buck Institute validation**: The Aging Cell paper was published in 2025 (not 2024) and was conducted in partnership with the Buck Institute for Research on Aging.

### Medical Accuracy Requirements
- **ASFA Category**: TPE is recognized as a first-line or second-line treatment by ASFA for numerous autoimmune conditions. Do not overstate the ASFA categorization.
- **AMBAR Trial**: Multicenter, randomized, double-blind, placebo-controlled. 496 patients. Mild-to-moderate Alzheimer's. Results published in 2020 (not 2017).
- **Dr. Kiprov credentials**: M.D., H.P. (ASCP). Founding member of ASFA (not president). Fellowship at MGH/Harvard (not residency). First U.S. physician to pass Hemapheresis Practitioner Exam.
- **ARIA distinction**: TPE carries zero risk of ARIA. Monoclonal antibodies (lecanemab, donanemab) carry ARIA risk. This is a key safety differentiator.
- **Super Albumin**: Is an IV infusion, NOT a plasma exchange replacement fluid. It is administered between TPE sessions as a bridge therapy or as a standalone treatment.

### Items Requiring Human Verification [VERIFY]
- Dr. Kiprov's start year (1985) — noted in code comments
- PANS/PANDAS treatment language — clinical accuracy should be reviewed
- Dr. Kaplan bio and quote — requires his approval
- Dr. Green's procedure count (500+) and residency details (UT Southwestern)
