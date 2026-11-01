/** Builds the Higgsfield (GPT Image 2.5) prompt for every card -> scripts/portraits/hf-prompts.json */
import { readFileSync, writeFileSync } from 'node:fs';
import { ALL_CARDS } from '../../src/data/cards';
import type { Faction, Role } from '../../src/engine/types';

const LOOKS: Record<string, string> = JSON.parse(readFileSync(new URL('./looks.json', import.meta.url), 'utf8'));
const SKIN_LOOKS: Record<string, string> = {
  'leo-rise': 'in the Rise of the TMNT style, a slimmer turtle with a blue mask and a glowing ninja sword',
  'leo-mayhem': 'in the Mutant Mayhem movie style, a teen turtle in a dark hoodie with a blue mask',
  'raph-2012': 'in the TMNT 2012 style, with a chipped shell, red mask and green eyes',
  'donnie-rise': 'in the Rise of the TMNT style, with purple goggles and a high-tech tech-bo staff',
  'mikey-pizza': 'in a spooky Halloween pizza-monster costume, with bats and jack-o-lanterns',
  'spongebob-goofy': 'wearing a Goofy Goober peanut hat, joyful rock-star pose',
  'spongebob-xmas': 'wearing a Santa hat in a snowy Christmas scene',
  'patrick-kamp': 'as a young camper in an orange cap at summer camp',
  'tommy-paris': 'in a blue beret in front of the Eiffel Tower',
  'angelica-witch': 'in a purple witch costume and pointed hat, with bats on Halloween night',
  'aang-avatar-state': 'in the Avatar State, eyes and arrow tattoos glowing white, surrounded by a swirling air sphere',
  'korra-avatar-state': 'in the Avatar State with glowing white eyes, bending all four elements',
  'jimmy-boy-genius': 'with goggles on his forehead, launching his homemade rocket',
  'arnold-jungle': 'in a jungle explorer outfit with tropical leaves around him',
  'danny-ghost-zone': 'in the swirling green Ghost Zone with spooky portals',
  'zim-xmas': 'wearing a Santa suit and hat, with snow falling',
  'po-lunar': 'in a red and gold Lunar New Year outfit with lanterns and fireworks',
  'helga-valentine': 'holding a heart-shaped locket surrounded by pink hearts',
  'super-shredder': 'as hulking Super Shredder, mutated and covered in spiked armor',
  'lincoln-movie': 'at a cozy autumn family feast with falling leaves',
  quailman: 'as his superhero alter ego Quailman, with a belt worn around his head and a cape',
  'gerald-strawberry': 'wearing a full strawberry costume with green leaves on his head',
};

const POSE: Record<Role, string> = {
  CAP: 'confident leader pose',
  STR: 'explosive action pose',
  STG: 'clever thinking pose with a sly smile',
  GRD: 'strong protective stance',
  TRK: 'mischievous playful pose',
};
const AURA: Record<Faction, string> = {
  labrats: 'electric blue tech energy',
  heroes: 'blazing crimson hero energy',
  villains: 'dark violet shadow energy',
  animals: 'emerald green nature energy',
  friends: 'warm golden sunshine energy',
};
const STYLE = 'Shonen anime trading card illustration, cel-shaded, bold clean linework, vibrant colors, dynamic speed lines, character centered from the waist up, portrait, no text, no logo, no card border.';

const out = ALL_CARDS.map((c) => {
  const look = LOOKS[c.baseId];
  if (!look) throw new Error(`Missing look for ${c.baseId}`);
  const who = c.skin ? `${look}, ${SKIN_LOOKS[c.id]}` : look;
  if (c.skin && !SKIN_LOOKS[c.id]) throw new Error(`Missing skin look for ${c.id}`);
  return { id: c.id, prompt: `${c.name} from ${c.show}: ${who}. Reimagined in a shonen anime art style, ${POSE[c.role]}, ${AURA[c.faction]} swirling in the background. ${STYLE}` };
});
writeFileSync(new URL('./hf-prompts.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${out.length} prompts`);
