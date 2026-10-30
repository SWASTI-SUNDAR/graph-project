// Flowchart layouts per character. Coordinates are in px on a 900 x 620 canvas.
// Node variants: default | muted | orange | yellow. Shapes: box | tab (rounded bottom only).

const menstruating = {
  badge: { x: 450, y: 148, certainty: 2 },
  nodes: [
    { id: 'concern', x: 371, y: 7, w: 162, h: 28, variant: 'yellow', lines: [{ text: 'Concern for iron deficiency', bold: true }] },
    {
      id: 'considerations',
      x: 398, y: 47, w: 104, h: 48, shape: 'tab',
      lines: [{ text: 'Considerations of serum ferritin', bold: true }],
    },
    {
      id: 'ferritin-15',
      x: 192, y: 297, w: 89, h: 32, variant: 'muted', icon: 'info',
      lines: [{ text: 'Serum ferritin' }, { text: '≤15 ng/mL' }],
    },
    {
      id: 'ferritin-30',
      x: 318, y: 297, w: 87, h: 32, icon: 'check',
      lines: [{ text: 'Serum ferritin' }, { text: '≤30 ng/mL', bold: true }],
    },
    {
      id: 'ferritin-31-50',
      x: 501, y: 297, w: 88, h: 32,
      lines: [{ text: 'Serum ferritin' }, { text: '31–50 ng/mL', bold: true }],
    },
    {
      id: 'diagnosis-1',
      x: 316, y: 362, w: 90, h: 32, variant: 'orange',
      lines: [{ text: 'Diagnosis of iron deficiency', bold: true }],
    },
    {
      id: 'high-risk',
      x: 499, y: 362, w: 90, h: 32, icon: 'info',
      lines: [{ text: 'High-risk group?' }],
    },
    {
      id: 'diagnosis-2',
      x: 448, y: 445, w: 88, h: 32, variant: 'orange',
      lines: [{ text: 'Diagnosis of iron deficiency', bold: true }],
    },
    {
      id: 'no-diagnosis',
      x: 551, y: 445, w: 89, h: 32,
      lines: [{ text: 'No diagnosis of iron deficiency' }],
    },
  ],
  learnMore: { x: 439, y: 485, w: 98 },
  edges: [
    { d: 'M450 35 V47' },
    { d: 'M450 95 V100', arrow: true },
    { d: 'M450 265 V280 M361 280 H545 M361 280 V297 M545 280 V297' },
    { d: 'M361 329 V361', arrow: true },
    { d: 'M545 329 V361', arrow: true },
    { d: 'M545 394 V420 M492 420 H596' },
    { d: 'M492 420 V444', arrow: true },
    { d: 'M596 420 V444', arrow: true },
  ],
}

// Other characters reuse this layout until their own graphs are provided
export const flows = {
  children: menstruating,
  adults: menstruating,
  menstruating,
  pregnant: menstruating,
  inflammation: menstruating,
}
