<!-- The design decision this site was built from, in the format of Kora's design director.
     Business: DRY EYECARE (a PRO EYECARE practice). Source design: PRO Eyecare website design, Option D. -->

# DESIGN.md — DRY EYECARE

archetype: luxury-editorial
rationale: DRY EYECARE is the dry eye practice of PRO EYECARE, so it wears the parent's chosen look, Option D "Luxury Editorial", rather than a new identity. That means warm linen grounds, deep teal, Cormorant Garamond display type and generous whitespace. A patient who has spent years on eye drops is not looking for urgency. They want to be convinced that someone finally understands the cause. The calm, editorial pace lets each band answer one question (is it dry eye, what causes it, what fixes it, who is the doctor, where do I go). The quiet palette signals a specialist practice rather than a high-street optician.
interaction_level: L1

personality: [assured, calm, clinical, warm]

typography:
  display: "Cormorant Garamond"
  body: "Karla"
  scale: 1.333
  notes: Cormorant Garamond is used at weight 500 for every heading. The feature headings pair an upright line with an italic teal second line ("Drops soothe the surface." / "We treat the cause."). The display size is clamp(44px, 7vw, 104px) with 1.02 leading, capped at 16ch. Section h2s run clamp(32px, 4vw, 56px). Karla carries the body at weight 300, 17px with 1.75 leading. Eyebrows are Karla 600 at 12px, uppercase, with 0.28em tracking. Buttons and the nav are Karla 700, uppercase, with 0.06 to 0.1em tracking. Fonts load from Google Fonts with display=swap.

palette:
  primary: "#0d3c39"
  secondary: "#06211f"
  accent: "#b0f5f9"
  ground: "#f3efe8"
  surface: "#eae4d8"
  ink: "#211f19"
  muted: "#514c40"
  border: "#e2dccf"
  application: >
    Deep teal (#0d3c39) is the brand colour. It is used for headings, primary buttons, links and
    the dark feature band. The deepest teal (#06211f) is used for button hover and the footer.

    Aqua (#b0f5f9) only appears on teal or as a hairline. It is used for eyebrows and buttons on
    the dark band, footer headings, link underlines and the drop in the logo mark. It is never used
    as text on the linen ground, where it fails contrast.

    The linen ground (#f3efe8) alternates with a sand surface (#eae4d8) bounded by #e2dccf
    hairlines. Cards are #fbfaf5. Gold (#c8a24a) is reserved for review stars once real reviews
    exist. The greys are warm: #9a917e for eyebrows and #736d5e for quiet text.

composition:
  whitespace: generous
  photography: supporting
  card_usage: light
  mobile: Below 1200px the centred nav collapses into a "Menu" button that opens a right-hand sheet, which carries Home, the nav, and Book and Call buttons. Every grid is auto-fit, so splits stack to one column. The arch image keeps its 4:5 ratio. Hours rows keep their leader lines. Nothing scrolls horizontally at 375px.

pages:
  - slug: index
    title: "DRY EYECARE – Dry Eye Treatment in Greenwich & Darien, CT"
    h1: "Dry eye treatment in Greenwich & Darien, CT."
    intent: is this the place that will finally fix my dry eye
  - slug: dry-eye
    h1: "Dry eye in Greenwich & Darien, explained."
    intent: what is wrong with my eyes, and is it worth seeing someone
  - slug: treatments
    h1: "Dry eye treatments in Greenwich & Darien, CT."
    intent: what are my options and how is one chosen
  - slug: optilight / optiplus / tearcare / low-level-light-therapy / blephex / zest
    intent: what is this treatment, does it suit me, what is a session like
    takes: [facts, how_it_works, who_it_helps, visit, reviewer, related, faq]
  - slug: meibomian-gland-dysfunction / blepharitis / stye-treatment / contact-lenses-for-dry-eyes
    intent: explain this condition and show which treatments help
    takes: [guide, reviewer, treatments, faq, related_conditions]
  - slug: about
    h1: "Dry eye care led by Dr. Inna Lazar."
    intent: who is the doctor and why trust her with this
  - slug: greenwich
    h1: "Dry eye treatment in Greenwich, CT."
    intent: where is it, when is it open, can I come after work
  - slug: darien
    h1: "Dry eye treatment in Darien, CT."
    intent: where is it, when is it open, can I come after work
  - slug: contact
    h1: "Book a dry eye evaluation in Greenwich or Darien."
    intent: how do I book

# New domain with no legacy URLs. The old getproeyecare.com dry eye pages stay on the parent site (GitHub issue #423, step 4).
redirects: []

sections:
  - id: hero
    spec: >
      Centred eyebrow, display headline and a light lead paragraph, then a teal "Book an Evaluation"
      button and an outlined call button. On the homepage a full-width 16:8 photo of Dr. Lazar at the
      slit lamp sits beneath, with 8px corners. Inner pages use the same hero without the photo, and
      treatment pages add a three-cell fact strip.
  - id: approach / how-it-works / story
    spec: >
      A split. On one side is an upright heading line, an italic teal second line, body copy and an
      aqua-underlined text link. On the other is an arch-topped photo (border-radius 280px 280px
      8px 8px).
  - id: causes / team / other-office / conditions
    spec: >
      The dark teal band, one per page at most. It holds an aqua eyebrow, a near-white heading, mist
      body text, and either an aqua button or outlined aqua chips.
  - id: locations / office
    spec: >
      Hours are set as day / leader line / time rows, matching the owner's own hours layout.
      Closed days are greyed out.
  - id: reviewer
    spec: >
      Every treatment and condition page carries a "Medically reviewed by Dr. Inna Lazar, OD" card
      with her portrait and the update date. MedicalWebPage JSON-LD mirrors it with reviewedBy and
      lastReviewed (issue #423, step 8).

avoid:
  - Copying any sentence from getproeyecare.com. All copy is rewritten (issue #423, step 2), and there is no cross-domain canonical.
  - Invented reviews or testimonials. The three quotes in the Option D mock are designer filler. Until real reviews are supplied, the reviews band links to each office's Google listing.
  - Any phone number other than (203) 202-0202. The old (203) 698-5049 and "Greenwich Eye Care, Old Greenwich" naming must never appear.
  - Separate business identities per office. Both offices are DRY EYECARE, a PRO EYECARE practice, with parentOrganization set in JSON-LD and no new Google Business Profiles (issue #423, step 5).
  - Symptom or health fields on the booking form, and ad pixels on it (issue #423, step 9).
  - Statistics, device indications or outcome promises the practice has not stated. Low-level light therapy is always described as off-label for dry eye.
  - New stock photography. Photos come from getproeyecare.com: mostly the practice's own shoots, plus three stock images the old site already used, which should be replaced if possible. Each page has its own photo, and alt text describes what is actually shown. Only the Greenwich showroom photo is labelled with a town.
  - Drop shadows, gradients and rounded buttons. Buttons are square, as in Option D.
