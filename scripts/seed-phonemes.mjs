import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const phonemes = [
  // ══════════ CONSONANTS (ව්‍යංජන) ══════════
  // Velar (කණ්ඨජ)
  { phonemeId: 'PHO-0001', targetPhoneme: 'ක', script: 'කමල් කාඩ්කින් කඩල කෑවා', category: 'consonants', sortOrder: 1 },
  { phonemeId: 'PHO-0002', targetPhoneme: 'ක', script: 'කොළඹ කපුරු කර්මාන්ත ශාලාව', category: 'consonants', sortOrder: 2 },
  { phonemeId: 'PHO-0003', targetPhoneme: 'ක', script: 'කාලගුණය කැළඹිලි සහිතයි', category: 'consonants', sortOrder: 3 },
  { phonemeId: 'PHO-0004', targetPhoneme: 'ඛ', script: 'ඛනිජ සම්පත් ඛාදනය වෙයි', category: 'consonants', sortOrder: 4 },
  { phonemeId: 'PHO-0005', targetPhoneme: 'ග', script: 'ගසක් ගෙදර ගාව තිබුණා', category: 'consonants', sortOrder: 5 },
  { phonemeId: 'PHO-0006', targetPhoneme: 'ග', script: 'ගමේ ගොවියා ගොයම් කපනවා', category: 'consonants', sortOrder: 6 },
  { phonemeId: 'PHO-0007', targetPhoneme: 'ග', script: 'ගඟක් ගලා යනවා ගම මැද', category: 'consonants', sortOrder: 7 },
  { phonemeId: 'PHO-0008', targetPhoneme: 'ඝ', script: 'ඝෝෂාව ගම පුරා ඇසුණා', category: 'consonants', sortOrder: 8 },
  { phonemeId: 'PHO-0009', targetPhoneme: 'ඞ', script: 'අඞ්ග සම්පූර්ණ පුහුණුවක්', category: 'consonants', sortOrder: 9 },
  
  // Palatal (තාලුජ)
  { phonemeId: 'PHO-0010', targetPhoneme: 'ච', script: 'චිත්තය චමත්කාර කරයි', category: 'consonants', sortOrder: 10 },
  { phonemeId: 'PHO-0011', targetPhoneme: 'ච', script: 'චන්ද්‍රිකා චාරිකාව චීනයට', category: 'consonants', sortOrder: 11 },
  { phonemeId: 'PHO-0012', targetPhoneme: 'ඡ', script: 'ඡන්දය ඡායාරූප සමගයි', category: 'consonants', sortOrder: 12 },
  { phonemeId: 'PHO-0013', targetPhoneme: 'ජ', script: 'ජනතාව ජයග්‍රහණය සැමරුවා', category: 'consonants', sortOrder: 13 },
  { phonemeId: 'PHO-0014', targetPhoneme: 'ජ', script: 'ජලය ජීවිතයට අත්‍යවශ්‍යයි', category: 'consonants', sortOrder: 14 },
  { phonemeId: 'PHO-0015', targetPhoneme: 'ජ', script: 'ජාතික ජනමත විචාරණය', category: 'consonants', sortOrder: 15 },
  { phonemeId: 'PHO-0016', targetPhoneme: 'ඣ', script: 'ඣායාවට පෙනෙන ලෙස සිටියා', category: 'consonants', sortOrder: 16 },
  { phonemeId: 'PHO-0017', targetPhoneme: 'ඤ', script: 'ඤාණය ලැබීම ආශිර්වාදයකි', category: 'consonants', sortOrder: 17 },
  
  // Retroflex (මූර්ධජ)
  { phonemeId: 'PHO-0018', targetPhoneme: 'ට', script: 'ටිකක් ටීවී එක බලමු', category: 'consonants', sortOrder: 18 },
  { phonemeId: 'PHO-0019', targetPhoneme: 'ට', script: 'ටොමැටෝ ටින් එකක් ගෙනාවා', category: 'consonants', sortOrder: 19 },
  { phonemeId: 'PHO-0020', targetPhoneme: 'ඨ', script: 'ඨානය නිශ්චිතව තීරණය කළා', category: 'consonants', sortOrder: 20 },
  { phonemeId: 'PHO-0021', targetPhoneme: 'ඩ', script: 'ඩොක්ටර් ඩයලොග් ගිවිසුම', category: 'consonants', sortOrder: 21 },
  { phonemeId: 'PHO-0022', targetPhoneme: 'ඪ', script: 'ජනාධිපති මන්දිරයට ගියේය', category: 'consonants', sortOrder: 22 },
  { phonemeId: 'PHO-0023', targetPhoneme: 'ණ', script: 'ණය ගෙවීමේ කාලය අවසානයි', category: 'consonants', sortOrder: 23 },
  
  // Dental (දන්තජ)
  { phonemeId: 'PHO-0024', targetPhoneme: 'ත', script: 'තාත්තා තේ තැටිය ගෙනාවා', category: 'consonants', sortOrder: 24 },
  { phonemeId: 'PHO-0025', targetPhoneme: 'ත', script: 'තරුණ තරුණියන් තරඟයට ගියා', category: 'consonants', sortOrder: 25 },
  { phonemeId: 'PHO-0026', targetPhoneme: 'ත', script: 'තොරතුරු තාක්ෂණය තවමත් වැඩිවෙයි', category: 'consonants', sortOrder: 26 },
  { phonemeId: 'PHO-0027', targetPhoneme: 'ථ', script: 'ථේරවාදී බුද්ධ ධර්මය', category: 'consonants', sortOrder: 27 },
  { phonemeId: 'PHO-0028', targetPhoneme: 'ද', script: 'දරුවා දවසේ දිනචරියාව කළා', category: 'consonants', sortOrder: 28 },
  { phonemeId: 'PHO-0029', targetPhoneme: 'ද', script: 'දිනපතා දහම් පාසල යයි', category: 'consonants', sortOrder: 29 },
  { phonemeId: 'PHO-0030', targetPhoneme: 'ද', script: 'දේශපාලන දැක්ම වෙනස් වුණා', category: 'consonants', sortOrder: 30 },
  { phonemeId: 'PHO-0031', targetPhoneme: 'ධ', script: 'ධර්මය ධනවත් ජීවිතයක් දෙයි', category: 'consonants', sortOrder: 31 },
  { phonemeId: 'PHO-0032', targetPhoneme: 'න', script: 'නගරයේ නව නිවාස සැලසුම', category: 'consonants', sortOrder: 32 },
  { phonemeId: 'PHO-0033', targetPhoneme: 'න', script: 'නමුත් නොදැනුවත්ව නතර වුණා', category: 'consonants', sortOrder: 33 },
  { phonemeId: 'PHO-0034', targetPhoneme: 'න', script: 'නිදහසේ නව අවුරුද්ද සැමරුවා', category: 'consonants', sortOrder: 34 },
  
  // Labial (ඔෂ්ඨජ)
  { phonemeId: 'PHO-0035', targetPhoneme: 'ප', script: 'පාසැලේ පාඩම් පුහුණු කළා', category: 'consonants', sortOrder: 35 },
  { phonemeId: 'PHO-0036', targetPhoneme: 'ප', script: 'පොත් පුස්තකාලයෙන් පත් ගත්තා', category: 'consonants', sortOrder: 36 },
  { phonemeId: 'PHO-0037', targetPhoneme: 'ප', script: 'පරිසරය පිරිසිදු කිරීම පටන් ගත්තා', category: 'consonants', sortOrder: 37 },
  { phonemeId: 'PHO-0038', targetPhoneme: 'ඵ', script: 'ඵලදායී වැඩසටහනක් ඵලවත් වුණා', category: 'consonants', sortOrder: 38 },
  { phonemeId: 'PHO-0039', targetPhoneme: 'බ', script: 'බස් එකෙන් බඩුවල් බෑවා', category: 'consonants', sortOrder: 39 },
  { phonemeId: 'PHO-0040', targetPhoneme: 'බ', script: 'බිත්තරේ බෝතලේ බෝල ළඟ', category: 'consonants', sortOrder: 40 },
  { phonemeId: 'PHO-0041', targetPhoneme: 'බ', script: 'බුද්ධ ධර්මය බලවත් වෙයි', category: 'consonants', sortOrder: 41 },
  { phonemeId: 'PHO-0042', targetPhoneme: 'භ', script: 'භාෂාව භාවිතා කරන භවනය', category: 'consonants', sortOrder: 42 },
  { phonemeId: 'PHO-0043', targetPhoneme: 'ම', script: 'මාමා මිනිසුන් මුණගැසුණා', category: 'consonants', sortOrder: 43 },
  { phonemeId: 'PHO-0044', targetPhoneme: 'ම', script: 'මහ මඟ මහා මාර්ගයකි', category: 'consonants', sortOrder: 44 },
  { phonemeId: 'PHO-0045', targetPhoneme: 'ම', script: 'මුදල් මන්ත්‍රණාලයේ මාධ්‍ය සාකච්ඡාව', category: 'consonants', sortOrder: 45 },
  
  // Semi-vowels & Liquids
  { phonemeId: 'PHO-0046', targetPhoneme: 'ය', script: 'යාළුවා යන්ත්‍ර යයි ගෙදර', category: 'consonants', sortOrder: 46 },
  { phonemeId: 'PHO-0047', targetPhoneme: 'ය', script: 'යුද්ධය යළි නොවේවා කියා', category: 'consonants', sortOrder: 47 },
  { phonemeId: 'PHO-0048', targetPhoneme: 'ර', script: 'රජ රටවල් රාජ්‍ය සභාව', category: 'consonants', sortOrder: 48 },
  { phonemeId: 'PHO-0049', targetPhoneme: 'ර', script: 'රෑට රථයෙන් රහසිගතව ගියා', category: 'consonants', sortOrder: 49 },
  { phonemeId: 'PHO-0050', targetPhoneme: 'ල', script: 'ලමයා ලියමනක් ලියුවා', category: 'consonants', sortOrder: 50 },
  { phonemeId: 'PHO-0051', targetPhoneme: 'ල', script: 'ලෝකයේ ලක්ෂ ගණනක් මිනිසුන්', category: 'consonants', sortOrder: 51 },
  { phonemeId: 'PHO-0052', targetPhoneme: 'ව', script: 'වරින් වර වහින වැස්ස', category: 'consonants', sortOrder: 52 },
  { phonemeId: 'PHO-0053', targetPhoneme: 'ව', script: 'වැඩසටහන වාර්තා කළේ අද', category: 'consonants', sortOrder: 53 },
  
  // Sibilants & Aspirates
  { phonemeId: 'PHO-0054', targetPhoneme: 'ශ', script: 'ශාස්ත්‍රීය ශබ්ද විද්‍යාව ඉගෙන ගන්නවා', category: 'consonants', sortOrder: 54 },
  { phonemeId: 'PHO-0055', targetPhoneme: 'ශ', script: 'ශ්‍රී ලංකාවේ ශ්‍රේෂ්ඨාධිකරණය', category: 'consonants', sortOrder: 55 },
  { phonemeId: 'PHO-0056', targetPhoneme: 'ෂ', script: 'ෂඩ්වාර්ගික ව්‍යුහය විශ්ලේෂණය', category: 'consonants', sortOrder: 56 },
  { phonemeId: 'PHO-0057', targetPhoneme: 'ස', script: 'සමන ගෙදර ගෙනාවා සමහර බඩු', category: 'consonants', sortOrder: 57 },
  { phonemeId: 'PHO-0058', targetPhoneme: 'ස', script: 'සිංහල සාහිත්‍ය සම්මාන උළෙල', category: 'consonants', sortOrder: 58 },
  { phonemeId: 'PHO-0059', targetPhoneme: 'ස', script: 'සෞඛ්‍ය සේවා සංවිධානය සහාය දුන්නා', category: 'consonants', sortOrder: 59 },
  { phonemeId: 'PHO-0060', targetPhoneme: 'හ', script: 'හදිසියේ හොඳ හැඟීමක් ආවා', category: 'consonants', sortOrder: 60 },
  { phonemeId: 'PHO-0061', targetPhoneme: 'හ', script: 'හෙට හවසට හමුවෙමු නේද', category: 'consonants', sortOrder: 61 },
  { phonemeId: 'PHO-0062', targetPhoneme: 'ළ', script: 'ළමයින්ට ළඟ ඉන්න අවශ්‍යයි', category: 'consonants', sortOrder: 62 },
  { phonemeId: 'PHO-0063', targetPhoneme: 'ෆ', script: 'ෆෝන් එකෙන් ෆොටෝ එකක් ගත්තා', category: 'consonants', sortOrder: 63 },

  // ══════════ VOWELS (ස්වර) ══════════
  { phonemeId: 'PHO-0064', targetPhoneme: 'අ', script: 'අම්මා අපට අත්පත් හැදුවා', category: 'vowels', sortOrder: 1 },
  { phonemeId: 'PHO-0065', targetPhoneme: 'අ', script: 'අද අළුත් අවුරුද්දයි', category: 'vowels', sortOrder: 2 },
  { phonemeId: 'PHO-0066', targetPhoneme: 'අ', script: 'අනාගතය අපේ අතේ පවතී', category: 'vowels', sortOrder: 3 },
  { phonemeId: 'PHO-0067', targetPhoneme: 'ආ', script: 'ආච්චි ආදරෙන් ආහාර පිසුවා', category: 'vowels', sortOrder: 4 },
  { phonemeId: 'PHO-0068', targetPhoneme: 'ආ', script: 'ආයුබෝවන් ආයතනය ආරම්භ කළා', category: 'vowels', sortOrder: 5 },
  { phonemeId: 'PHO-0069', targetPhoneme: 'ඉ', script: 'ඉගෙන ගන්න ඉතාමත් හොඳයි', category: 'vowels', sortOrder: 6 },
  { phonemeId: 'PHO-0070', targetPhoneme: 'ඉ', script: 'ඉතිහාසය ඉගෙන ගන්නවා ඉක්මනට', category: 'vowels', sortOrder: 7 },
  { phonemeId: 'PHO-0071', targetPhoneme: 'ඊ', script: 'ඊට පස්සේ ඊළඟ දවසේ', category: 'vowels', sortOrder: 8 },
  { phonemeId: 'PHO-0072', targetPhoneme: 'උ', script: 'උදේට උඩ බලලා උනන්දුවෙන් ගියා', category: 'vowels', sortOrder: 9 },
  { phonemeId: 'PHO-0073', targetPhoneme: 'උ', script: 'උතුරේ උදාව උත්සවශීලී වුණා', category: 'vowels', sortOrder: 10 },
  { phonemeId: 'PHO-0074', targetPhoneme: 'ඌ', script: 'ඌරන් ඌන ප්‍රමාණවත් නැත', category: 'vowels', sortOrder: 11 },
  { phonemeId: 'PHO-0075', targetPhoneme: 'ඍ', script: 'ඍතු වෙනස ඍජුව බලපෑවා', category: 'vowels', sortOrder: 12 },
  { phonemeId: 'PHO-0076', targetPhoneme: 'එ', script: 'එයා එකට එළියට ගියා', category: 'vowels', sortOrder: 13 },
  { phonemeId: 'PHO-0077', targetPhoneme: 'එ', script: 'එදා එදිනම එළවළු ගෙනාවා', category: 'vowels', sortOrder: 14 },
  { phonemeId: 'PHO-0078', targetPhoneme: 'ඒ', script: 'ඒකා ඒක ඒකාබද්ධව කළා', category: 'vowels', sortOrder: 15 },
  { phonemeId: 'PHO-0079', targetPhoneme: 'ඓ', script: 'ඓතිහාසික ස්ථානයක් බැලුවා', category: 'vowels', sortOrder: 16 },
  { phonemeId: 'PHO-0080', targetPhoneme: 'ඔ', script: 'ඔබට ඔබේ ඔප්පුව ගෙනෙන්න', category: 'vowels', sortOrder: 17 },
  { phonemeId: 'PHO-0081', targetPhoneme: 'ඔ', script: 'ඔහු ඔබ ගැන ඔවුන්ට කිව්වා', category: 'vowels', sortOrder: 18 },
  { phonemeId: 'PHO-0082', targetPhoneme: 'ඕ', script: 'ඕනෑම ඕනෑකමක් ඕනෑ වේලාවට', category: 'vowels', sortOrder: 19 },
  { phonemeId: 'PHO-0083', targetPhoneme: 'ඖ', script: 'ඖෂධ වර්ග ඖදාරිකව ලබා දුන්නා', category: 'vowels', sortOrder: 20 },

  // ══════════ COMBINED VOWEL SIGNS (පිලි) ══════════
  { phonemeId: 'PHO-0084', targetPhoneme: 'කා', script: 'කාලයක් කාර්යබහුල දවසක්', category: 'vowel-signs', sortOrder: 1 },
  { phonemeId: 'PHO-0085', targetPhoneme: 'කි', script: 'කිරි කිසිම කියමනක් නැත', category: 'vowel-signs', sortOrder: 2 },
  { phonemeId: 'PHO-0086', targetPhoneme: 'කී', script: 'කීයක්ද කීපයක් කීමට බැරි', category: 'vowel-signs', sortOrder: 3 },
  { phonemeId: 'PHO-0087', targetPhoneme: 'කු', script: 'කුඩා කුරුල්ලා කුළුණු මතට', category: 'vowel-signs', sortOrder: 4 },
  { phonemeId: 'PHO-0088', targetPhoneme: 'කූ', script: 'කූඩුව කූරිය කූට කළා', category: 'vowel-signs', sortOrder: 5 },
  { phonemeId: 'PHO-0089', targetPhoneme: 'කෙ', script: 'කෙනෙක් කෙළින්ම කෙසේ වුවද', category: 'vowel-signs', sortOrder: 6 },
  { phonemeId: 'PHO-0090', targetPhoneme: 'කේ', script: 'කේක් කේන්ද්‍රය කේතුග්‍රහය', category: 'vowel-signs', sortOrder: 7 },
  { phonemeId: 'PHO-0091', targetPhoneme: 'කො', script: 'කොහොමද කොළඹ කොච්චි එකේ', category: 'vowel-signs', sortOrder: 8 },
  { phonemeId: 'PHO-0092', targetPhoneme: 'කෝ', script: 'කෝකටත් කෝපයෙන් කෝළුවේ', category: 'vowel-signs', sortOrder: 9 },

  // ══════════ CONJUNCT CONSONANTS (සංයුක්ත) ══════════
  { phonemeId: 'PHO-0093', targetPhoneme: 'ක්‍ර', script: 'ක්‍රීඩා තරඟාවලිය ක්‍රියාත්මක කළා', category: 'conjuncts', sortOrder: 1 },
  { phonemeId: 'PHO-0094', targetPhoneme: 'ග්‍ර', script: 'ග්‍රාමීය ප්‍රදේශයේ ග්‍රන්ථ ආලයක්', category: 'conjuncts', sortOrder: 2 },
  { phonemeId: 'PHO-0095', targetPhoneme: 'ත්‍ර', script: 'ත්‍රිපිටකය ත්‍රස්තවාදයට එරෙහිව', category: 'conjuncts', sortOrder: 3 },
  { phonemeId: 'PHO-0096', targetPhoneme: 'ප්‍ර', script: 'ප්‍රධාන ප්‍රතිපත්තිය ප්‍රකාශ කළා', category: 'conjuncts', sortOrder: 4 },
  { phonemeId: 'PHO-0097', targetPhoneme: 'ද්‍ර', script: 'ද්‍රව්‍ය ද්‍රාවණයක් සෑදුවා', category: 'conjuncts', sortOrder: 5 },
  { phonemeId: 'PHO-0098', targetPhoneme: 'බ්‍ර', script: 'බ්‍රිතාන්‍ය බ්‍රහස්පතින්දා දින', category: 'conjuncts', sortOrder: 6 },
  { phonemeId: 'PHO-0099', targetPhoneme: 'ශ්‍ර', script: 'ශ්‍රී ලංකාවේ ශ්‍රේෂ්ඨතම ශ්‍රමය', category: 'conjuncts', sortOrder: 7 },
  { phonemeId: 'PHO-0100', targetPhoneme: 'ස්ව', script: 'ස්වාධීන ස්වභාවික ස්වර්ණමය', category: 'conjuncts', sortOrder: 8 },

  // ══════════ DAILY CONVERSATION SENTENCES ══════════
  { phonemeId: 'PHO-0101', targetPhoneme: 'ක', script: 'කොහොමද සැපද ඔබට', category: 'daily-conversation', sortOrder: 1 },
  { phonemeId: 'PHO-0102', targetPhoneme: 'ග', script: 'ගෙදර ගිහින් එනවා ටිකකින්', category: 'daily-conversation', sortOrder: 2 },
  { phonemeId: 'PHO-0103', targetPhoneme: 'ත', script: 'තව ටිකක් ඉවසන්න පුළුවන්ද', category: 'daily-conversation', sortOrder: 3 },
  { phonemeId: 'PHO-0104', targetPhoneme: 'ද', script: 'දැන් මොනවද කරන්නේ', category: 'daily-conversation', sortOrder: 4 },
  { phonemeId: 'PHO-0105', targetPhoneme: 'ම', script: 'මට උදව් කරන්න පුළුවන්ද', category: 'daily-conversation', sortOrder: 5 },
  { phonemeId: 'PHO-0106', targetPhoneme: 'න', script: 'නෑ එහෙම දෙයක් නැහැ', category: 'daily-conversation', sortOrder: 6 },
  { phonemeId: 'PHO-0107', targetPhoneme: 'බ', script: 'බත් කනවද නැත්නම් පාන් ද', category: 'daily-conversation', sortOrder: 7 },
  { phonemeId: 'PHO-0108', targetPhoneme: 'ස', script: 'සුබ උදෑසනක් වේවා', category: 'daily-conversation', sortOrder: 8 },
  { phonemeId: 'PHO-0109', targetPhoneme: 'ප', script: 'පස්සේ කතා කරමු හොඳද', category: 'daily-conversation', sortOrder: 9 },
  { phonemeId: 'PHO-0110', targetPhoneme: 'ව', script: 'වහිනවා එළියට යන්න එපා', category: 'daily-conversation', sortOrder: 10 },
  { phonemeId: 'PHO-0111', targetPhoneme: 'හ', script: 'හරි හරි මමත් එනවා', category: 'daily-conversation', sortOrder: 11 },
  { phonemeId: 'PHO-0112', targetPhoneme: 'ල', script: 'ලස්සන දවසක් නේද අද', category: 'daily-conversation', sortOrder: 12 },
  { phonemeId: 'PHO-0113', targetPhoneme: 'ර', script: 'රස්නෙයි අද ගොඩක්', category: 'daily-conversation', sortOrder: 13 },
  { phonemeId: 'PHO-0114', targetPhoneme: 'ය', script: 'යමු කෑම කන්න එළියට', category: 'daily-conversation', sortOrder: 14 },
  { phonemeId: 'PHO-0115', targetPhoneme: 'ච', script: 'චූටි ඉක්මනට ෆෝන් කරන්නම්', category: 'daily-conversation', sortOrder: 15 },

  // ══════════ NUMBERS & COUNTING ══════════
  { phonemeId: 'PHO-0116', targetPhoneme: 'එක', script: 'එක දෙක තුන හතර පහ', category: 'numbers', sortOrder: 1 },
  { phonemeId: 'PHO-0117', targetPhoneme: 'හය', script: 'හය හත අට නවය දහය', category: 'numbers', sortOrder: 2 },
  { phonemeId: 'PHO-0118', targetPhoneme: 'විසි', script: 'විසිපහ සියයට විසිපහයි', category: 'numbers', sortOrder: 3 },
  { phonemeId: 'PHO-0119', targetPhoneme: 'සිය', script: 'සිය ගණනක් මිනිස්සු ආවා', category: 'numbers', sortOrder: 4 },
  { phonemeId: 'PHO-0120', targetPhoneme: 'දහස', script: 'දහස් ගණනක් රුපියල් වැය වුණා', category: 'numbers', sortOrder: 5 },

  // ══════════ FORMAL / NEWS SENTENCES ══════════
  { phonemeId: 'PHO-0121', targetPhoneme: 'ජ', script: 'ජනාධිපතිතුමා රාජ්‍ය සාකච්ඡාවට සහභාගි වුණා', category: 'formal', sortOrder: 1 },
  { phonemeId: 'PHO-0122', targetPhoneme: 'ප', script: 'පාර්ලිමේන්තුව අද දින රැස්වූයේය', category: 'formal', sortOrder: 2 },
  { phonemeId: 'PHO-0123', targetPhoneme: 'ආ', script: 'ආර්ථික සංවර්ධන අමාත්‍යාංශය පිහිටුවන ලදි', category: 'formal', sortOrder: 3 },
  { phonemeId: 'PHO-0124', targetPhoneme: 'ම', script: 'මහ බැංකුව පොලී අනුපාත වෙනස් කළේය', category: 'formal', sortOrder: 4 },
  { phonemeId: 'PHO-0125', targetPhoneme: 'අ', script: 'අධ්‍යාපන ප්‍රතිසංස්කරණ යෝජනා සම්මත විය', category: 'formal', sortOrder: 5 },
  { phonemeId: 'PHO-0126', targetPhoneme: 'ක', script: 'කෘෂිකාර්මික අංශය නව පියවරක් ගන්නා ලදි', category: 'formal', sortOrder: 6 },
  { phonemeId: 'PHO-0127', targetPhoneme: 'ස', script: 'සෞඛ්‍ය අමාත්‍යාංශය නව මාර්ගෝපදේශ නිකුත් කළේය', category: 'formal', sortOrder: 7 },
  { phonemeId: 'PHO-0128', targetPhoneme: 'ත', script: 'තාක්ෂණික විශ්ව විද්‍යාලය නව පරිශ්‍රයක් විවෘත කළේය', category: 'formal', sortOrder: 8 },
  { phonemeId: 'PHO-0129', targetPhoneme: 'ද', script: 'දේශීය උත්පාදනය ඉහළ යාමක් වාර්තා විය', category: 'formal', sortOrder: 9 },
  { phonemeId: 'PHO-0130', targetPhoneme: 'බ', script: 'බස්නාහිර පළාතේ බද්ධ ජල ව්‍යාපෘතිය ආරම්භ විය', category: 'formal', sortOrder: 10 },

  // ══════════ NATURE & ENVIRONMENT ══════════
  { phonemeId: 'PHO-0131', targetPhoneme: 'ග', script: 'ගසක් සිටුවීම අනාගත පරම්පරාවට උපහාරයකි', category: 'nature', sortOrder: 1 },
  { phonemeId: 'PHO-0132', targetPhoneme: 'ව', script: 'වනාන්තර විනාශය නතර කළ යුතුය', category: 'nature', sortOrder: 2 },
  { phonemeId: 'PHO-0133', targetPhoneme: 'ස', script: 'සාගරයේ ජල මට්ටම ඉහළ යයි', category: 'nature', sortOrder: 3 },
  { phonemeId: 'PHO-0134', targetPhoneme: 'ක', script: 'කාලගුණ විපර්යාස ගෝලීය ප්‍රශ්නයකි', category: 'nature', sortOrder: 4 },
  { phonemeId: 'PHO-0135', targetPhoneme: 'ප', script: 'පරිසර සංරක්ෂණය අපේ වගකීමකි', category: 'nature', sortOrder: 5 },
  { phonemeId: 'PHO-0136', targetPhoneme: 'න', script: 'නිවර්තන වනාන්තරවල ජීවී විවිධත්වය', category: 'nature', sortOrder: 6 },
  { phonemeId: 'PHO-0137', targetPhoneme: 'හ', script: 'හිරු බැසයන විට අහස රතු වෙනවා', category: 'nature', sortOrder: 7 },
  { phonemeId: 'PHO-0138', targetPhoneme: 'ම', script: 'මල් පිපෙනවා මීයන්ගේ කාලයේදී', category: 'nature', sortOrder: 8 },
  { phonemeId: 'PHO-0139', targetPhoneme: 'ද', script: 'දිය ඇල්ල බලන්න ගොඩක් ලස්සනයි', category: 'nature', sortOrder: 9 },
  { phonemeId: 'PHO-0140', targetPhoneme: 'ත', script: 'තැනිතලා ප්‍රදේශයේ ගොවිතැන කරනවා', category: 'nature', sortOrder: 10 },

  // ══════════ TECHNOLOGY ══════════
  { phonemeId: 'PHO-0141', targetPhoneme: 'ත', script: 'තාක්ෂණය දිනෙන් දින දියුණු වෙනවා', category: 'technology', sortOrder: 1 },
  { phonemeId: 'PHO-0142', targetPhoneme: 'ක', script: 'කෘත්‍රිම බුද්ධිය අනාගතය වෙනස් කරයි', category: 'technology', sortOrder: 2 },
  { phonemeId: 'PHO-0143', targetPhoneme: 'ස', script: 'සයිබර් ආරක්ෂාව ඉතා වැදගත්ය', category: 'technology', sortOrder: 3 },
  { phonemeId: 'PHO-0144', targetPhoneme: 'ද', script: 'දත්ත විද්‍යාව නව රැකියා අවස්ථා සලසයි', category: 'technology', sortOrder: 4 },
  { phonemeId: 'PHO-0145', targetPhoneme: 'ම', script: 'මෘදුකාංග සංවර්ධනය සිංහලෙන්ම කළා', category: 'technology', sortOrder: 5 },
  { phonemeId: 'PHO-0146', targetPhoneme: 'ව', script: 'වෙබ් අඩවිය අළුත්වැඩියා කිරීම අවශ්‍යයි', category: 'technology', sortOrder: 6 },
  { phonemeId: 'PHO-0147', targetPhoneme: 'ප', script: 'ප්‍රයෝගික බුද්ධිමත් පද්ධතියක් හඳුන්වා දුන්නා', category: 'technology', sortOrder: 7 },
  { phonemeId: 'PHO-0148', targetPhoneme: 'අ', script: 'අන්තර්ජාලය හරහා අධ්‍යාපනය ලබනවා', category: 'technology', sortOrder: 8 },
  { phonemeId: 'PHO-0149', targetPhoneme: 'බ', script: 'බ්ලොක්චේන් තාක්ෂණය බැංකු ක්ෂේත්‍රයට', category: 'technology', sortOrder: 9 },
  { phonemeId: 'PHO-0150', targetPhoneme: 'ර', script: 'රොබෝ තාක්ෂණය රෝහල් වල භාවිතා කරනවා', category: 'technology', sortOrder: 10 },

  // ══════════ FOOD & CULTURE ══════════
  { phonemeId: 'PHO-0151', targetPhoneme: 'ක', script: 'කිරිබත් කැවුම් කොකිස් හැදුවා', category: 'food-culture', sortOrder: 1 },
  { phonemeId: 'PHO-0152', targetPhoneme: 'ත', script: 'තේ වතු ප්‍රදේශයේ තේ කොළ කඩනවා', category: 'food-culture', sortOrder: 2 },
  { phonemeId: 'PHO-0153', targetPhoneme: 'බ', script: 'බත් සහ කරි ඉතා රසයි', category: 'food-culture', sortOrder: 3 },
  { phonemeId: 'PHO-0154', targetPhoneme: 'ප', script: 'පොල් සම්බෝලය පාන් එක්ක කනවා', category: 'food-culture', sortOrder: 4 },
  { phonemeId: 'PHO-0155', targetPhoneme: 'ම', script: 'මාළු අම්බුල තියල සෑදුවා', category: 'food-culture', sortOrder: 5 },
  { phonemeId: 'PHO-0156', targetPhoneme: 'ද', script: 'දෝසේ ඉද්දි ආප්ප ටිකක් හැදුවා', category: 'food-culture', sortOrder: 6 },
  { phonemeId: 'PHO-0157', targetPhoneme: 'ස', script: 'සවස් ආහාරයට සීනි සම්බෝලය', category: 'food-culture', sortOrder: 7 },
  { phonemeId: 'PHO-0158', targetPhoneme: 'ග', script: 'ගම්මානයේ අළුත් අවුරුදු උත්සවය', category: 'food-culture', sortOrder: 8 },
  { phonemeId: 'PHO-0159', targetPhoneme: 'ව', script: 'වෙසක් කූඩු මලින් සරසා තිබුණා', category: 'food-culture', sortOrder: 9 },
  { phonemeId: 'PHO-0160', targetPhoneme: 'හ', script: 'හම්බන්තොට කටුපොල් ඉතිරි වුණා', category: 'food-culture', sortOrder: 10 },

  // ══════════ EDUCATION ══════════
  { phonemeId: 'PHO-0161', targetPhoneme: 'අ', script: 'අධ්‍යාපනය දරුවන්ගේ අයිතියකි', category: 'education', sortOrder: 1 },
  { phonemeId: 'PHO-0162', targetPhoneme: 'ප', script: 'පාසලේ ගුරුවරියන් පිරිසක් බඳවා ගත්තා', category: 'education', sortOrder: 2 },
  { phonemeId: 'PHO-0163', targetPhoneme: 'ව', script: 'විශ්ව විද්‍යාල ප්‍රවේශ විභාගය ලඟයි', category: 'education', sortOrder: 3 },
  { phonemeId: 'PHO-0164', targetPhoneme: 'ස', script: 'සිසුන්ට ශිෂ්‍යත්ව ලබා දුන්නා', category: 'education', sortOrder: 4 },
  { phonemeId: 'PHO-0165', targetPhoneme: 'ග', script: 'ගණිතය ගොඩක් අමාරු විෂයයි කියලා', category: 'education', sortOrder: 5 },
  { phonemeId: 'PHO-0166', targetPhoneme: 'හ', script: 'හොඳින් ඉගෙන ගන්න හැමදාම කියවන්න', category: 'education', sortOrder: 6 },
  { phonemeId: 'PHO-0167', targetPhoneme: 'ත', script: 'තක්සලාවේ තරුණ තරුණියන් ඉගෙන ගනී', category: 'education', sortOrder: 7 },
  { phonemeId: 'PHO-0168', targetPhoneme: 'න', script: 'නව ඉගෙනුම් ක්‍රමවේද හඳුන්වා දුන්නා', category: 'education', sortOrder: 8 },
  { phonemeId: 'PHO-0169', targetPhoneme: 'ද', script: 'දිරි ගැන්වීම දරුවන්ට අවශ්‍යයි', category: 'education', sortOrder: 9 },
  { phonemeId: 'PHO-0170', targetPhoneme: 'ම', script: 'මව්බස ඉගෙන ගැනීම මූලිකය', category: 'education', sortOrder: 10 },

  // ══════════ SPORTS ══════════
  { phonemeId: 'PHO-0171', targetPhoneme: 'ක', script: 'ක්‍රිකට් තරඟය ජයග්‍රහණයෙන් නිමා වුණා', category: 'sports', sortOrder: 1 },
  { phonemeId: 'PHO-0172', targetPhoneme: 'ර', script: 'රග්බි ක්‍රීඩකයන් රණ පුහුණුවේ යෙදුණා', category: 'sports', sortOrder: 2 },
  { phonemeId: 'PHO-0173', targetPhoneme: 'ත', script: 'තරුණ ක්‍රීඩකයන් තරඟයට සූදානම්', category: 'sports', sortOrder: 3 },
  { phonemeId: 'PHO-0174', targetPhoneme: 'ප', script: 'පාපන්දු තරඟය පරාජයෙන් නිමා වුණා', category: 'sports', sortOrder: 4 },
  { phonemeId: 'PHO-0175', targetPhoneme: 'ස', script: 'සිංහල ක්‍රීඩා සමාජය සම්මාන පිරිනැමුවා', category: 'sports', sortOrder: 5 },

  // ══════════ HEALTH ══════════
  { phonemeId: 'PHO-0176', targetPhoneme: 'ස', script: 'සෞඛ්‍ය සම්පන්න ජීවිතයක් ගත කරන්න', category: 'health', sortOrder: 1 },
  { phonemeId: 'PHO-0177', targetPhoneme: 'හ', script: 'හරිත එළවළු හොඳ සෞඛ්‍යයට', category: 'health', sortOrder: 2 },
  { phonemeId: 'PHO-0178', targetPhoneme: 'ආ', script: 'ආහාර පිළිවෙල නිතිපතා පවත්වන්න', category: 'health', sortOrder: 3 },
  { phonemeId: 'PHO-0179', targetPhoneme: 'ව', script: 'වෛද්‍ය උපදෙස් අනුව බෙහෙත් ගන්න', category: 'health', sortOrder: 4 },
  { phonemeId: 'PHO-0180', targetPhoneme: 'ම', script: 'මානසික සෞඛ්‍යයත් ශාරීරික සෞඛ්‍යයත් වැදගත්', category: 'health', sortOrder: 5 },

  // ══════════ TRAVEL & PLACES ══════════
  { phonemeId: 'PHO-0181', targetPhoneme: 'ක', script: 'කොළඹ කොටුව ඓතිහාසික ස්ථානයකි', category: 'travel', sortOrder: 1 },
  { phonemeId: 'PHO-0182', targetPhoneme: 'ස', script: 'සීගිරිය ලෝක උරුමයකි', category: 'travel', sortOrder: 2 },
  { phonemeId: 'PHO-0183', targetPhoneme: 'න', script: 'නුවරඑළියේ සීතල කාලගුණය ඉතා සුන්දරයි', category: 'travel', sortOrder: 3 },
  { phonemeId: 'PHO-0184', targetPhoneme: 'ග', script: 'ගාල්ලේ ප්‍රාකාරය ලස්සන ස්ථානයකි', category: 'travel', sortOrder: 4 },
  { phonemeId: 'PHO-0185', targetPhoneme: 'ම', script: 'මාතර මුහුදු වෙරළ ලස්සනයි', category: 'travel', sortOrder: 5 },
  { phonemeId: 'PHO-0186', targetPhoneme: 'ත', script: 'ත්‍රිකුණාමලය නැගෙනහිර වෙරළේ සිටියි', category: 'travel', sortOrder: 6 },
  { phonemeId: 'PHO-0187', targetPhoneme: 'අ', script: 'අනුරාධපුරය ඓතිහාසික නගරයකි', category: 'travel', sortOrder: 7 },
  { phonemeId: 'PHO-0188', targetPhoneme: 'ප', script: 'පොළොන්නරුව ඉතිහාසයෙන් පිරුණා', category: 'travel', sortOrder: 8 },
  { phonemeId: 'PHO-0189', targetPhoneme: 'ද', script: 'දඹුලු ගල් විහාරය ඉතා සුන්දරයි', category: 'travel', sortOrder: 9 },
  { phonemeId: 'PHO-0190', targetPhoneme: 'ය', script: 'යාපනය උතුරු පළාතේ ප්‍රධාන නගරයයි', category: 'travel', sortOrder: 10 },

  // ══════════ EMOTIONS & EXPRESSIONS ══════════
  { phonemeId: 'PHO-0191', targetPhoneme: 'ස', script: 'සතුටින් ජීවත් වෙන්න හදපු', category: 'emotions', sortOrder: 1 },
  { phonemeId: 'PHO-0192', targetPhoneme: 'ද', script: 'දුකක් දැනෙනවා මේ තත්ත්වය ගැන', category: 'emotions', sortOrder: 2 },
  { phonemeId: 'PHO-0193', targetPhoneme: 'ක', script: 'කෝපය පාලනය කරගන්න ඕනෑ', category: 'emotions', sortOrder: 3 },
  { phonemeId: 'PHO-0194', targetPhoneme: 'භ', script: 'භයක් නැතිව ඉදිරියට යන්න', category: 'emotions', sortOrder: 4 },
  { phonemeId: 'PHO-0195', targetPhoneme: 'ආ', script: 'ආදරය බෙදා ගන්න සැමදා', category: 'emotions', sortOrder: 5 },

  // ══════════ COMPLEX SENTENCES ══════════
  { phonemeId: 'PHO-0196', targetPhoneme: 'ශ්‍ර', script: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය', category: 'complex', sortOrder: 1 },
  { phonemeId: 'PHO-0197', targetPhoneme: 'ව්‍ය', script: 'ව්‍යවස්ථාදායක සභාවේ ව්‍යාපාර ආරම්භ විය', category: 'complex', sortOrder: 2 },
  { phonemeId: 'PHO-0198', targetPhoneme: 'ප්‍ර', script: 'ප්‍රධානමන්ත්‍රීතුමා ප්‍රකාශයක් නිකුත් කළේය', category: 'complex', sortOrder: 3 },
  { phonemeId: 'PHO-0199', targetPhoneme: 'ක්‍ර', script: 'ක්‍රමානුකූලව ක්‍රියාවලිය ක්‍රියාත්මක කරන ලදි', category: 'complex', sortOrder: 4 },
  { phonemeId: 'PHO-0200', targetPhoneme: 'සං', script: 'සංවර්ධන සංස්ථාව සංවිධානාත්මක වැඩසටහනක්', category: 'complex', sortOrder: 5 },

  // ══════════ MINIMAL PAIRS ══════════
  { phonemeId: 'PHO-0201', targetPhoneme: 'ක-ග', script: 'කම සහ ගම යන වචන වෙනස්', category: 'minimal-pairs', sortOrder: 1 },
  { phonemeId: 'PHO-0202', targetPhoneme: 'ත-ද', script: 'තම සහ දම යන වචන වෙනස්', category: 'minimal-pairs', sortOrder: 2 },
  { phonemeId: 'PHO-0203', targetPhoneme: 'ප-බ', script: 'පල සහ බල යන වචන වෙනස්', category: 'minimal-pairs', sortOrder: 3 },
  { phonemeId: 'PHO-0204', targetPhoneme: 'ස-හ', script: 'සර සහ හර යන වචන වෙනස්', category: 'minimal-pairs', sortOrder: 4 },
  { phonemeId: 'PHO-0205', targetPhoneme: 'ක-ඛ', script: 'කල සහ ඛල යන වචන වෙනස්', category: 'minimal-pairs', sortOrder: 5 },

  // ══════════ TONGUE TWISTERS (දිව පෙරළන) ══════════
  { phonemeId: 'PHO-0206', targetPhoneme: 'ර', script: 'රිට්ට ලිට්ට කුට්ටි පුට්ට', category: 'tongue-twisters', sortOrder: 1 },
  { phonemeId: 'PHO-0207', targetPhoneme: 'ක', script: 'කක්කුස්සේ කෙසෙල් කැටිත් කෑවා', category: 'tongue-twisters', sortOrder: 2 },
  { phonemeId: 'PHO-0208', targetPhoneme: 'ප', script: 'පාරේ පෝරු පෝරු පාරට', category: 'tongue-twisters', sortOrder: 3 },
  { phonemeId: 'PHO-0209', targetPhoneme: 'ස', script: 'සිරි සිරි සිරි සිරි සිරසේ', category: 'tongue-twisters', sortOrder: 4 },
  { phonemeId: 'PHO-0210', targetPhoneme: 'ම', script: 'මිරිස් මිරිකා මිරිස් මිරිකූවා', category: 'tongue-twisters', sortOrder: 5 },

  // ══════════ COMMANDS & INSTRUCTIONS ══════════
  { phonemeId: 'PHO-0211', targetPhoneme: 'ක', script: 'කරුණාකර දොර වසන්න', category: 'commands', sortOrder: 1 },
  { phonemeId: 'PHO-0212', targetPhoneme: 'බ', script: 'බලන්න මේ පැත්තට', category: 'commands', sortOrder: 2 },
  { phonemeId: 'PHO-0213', targetPhoneme: 'ඉ', script: 'ඉක්මනට ගෙදර එන්න', category: 'commands', sortOrder: 3 },
  { phonemeId: 'PHO-0214', targetPhoneme: 'ය', script: 'යන්න පාසලට ඉක්මනට', category: 'commands', sortOrder: 4 },
  { phonemeId: 'PHO-0215', targetPhoneme: 'ක', script: 'කන්න කාමරයට ගෙනියන්න', category: 'commands', sortOrder: 5 },
  { phonemeId: 'PHO-0216', targetPhoneme: 'ම', script: 'මේක මෙතන තියන්න', category: 'commands', sortOrder: 6 },
  { phonemeId: 'PHO-0217', targetPhoneme: 'හ', script: 'හොඳින් අහන්න මම කියන දේ', category: 'commands', sortOrder: 7 },
  { phonemeId: 'PHO-0218', targetPhoneme: 'ල', script: 'ලියන්න මේ ලිපිනය මෙතන', category: 'commands', sortOrder: 8 },
  { phonemeId: 'PHO-0219', targetPhoneme: 'ද', script: 'දිවෙන්න එපා මේ ඇතුළෙ', category: 'commands', sortOrder: 9 },
  { phonemeId: 'PHO-0220', targetPhoneme: 'ස', script: 'සනිප කරන්න කාමරය', category: 'commands', sortOrder: 10 },

  // ══════════ QUESTIONS ══════════
  { phonemeId: 'PHO-0221', targetPhoneme: 'ක', script: 'කොහොමද අද දවස', category: 'questions', sortOrder: 1 },
  { phonemeId: 'PHO-0222', targetPhoneme: 'ම', script: 'මොනවද කරන්නේ දැන්', category: 'questions', sortOrder: 2 },
  { phonemeId: 'PHO-0223', targetPhoneme: 'ඇ', script: 'ඇයි ඔබ මෙතනට ආවේ', category: 'questions', sortOrder: 3 },
  { phonemeId: 'PHO-0224', targetPhoneme: 'ක', script: 'කවුද ඔය එන්නේ', category: 'questions', sortOrder: 4 },
  { phonemeId: 'PHO-0225', targetPhoneme: 'ක', script: 'කීයද මේකෙ මිල', category: 'questions', sortOrder: 5 },
  { phonemeId: 'PHO-0226', targetPhoneme: 'ක', script: 'කොහෙද ඔබ ගෙදර', category: 'questions', sortOrder: 6 },
  { phonemeId: 'PHO-0227', targetPhoneme: 'ක', script: 'කවදාද ඔබ එන්නේ', category: 'questions', sortOrder: 7 },
  { phonemeId: 'PHO-0228', targetPhoneme: 'ම', script: 'මොකක්ද ඔයාගේ නම', category: 'questions', sortOrder: 8 },
  { phonemeId: 'PHO-0229', targetPhoneme: 'හ', script: 'හරිද මම එකතු වෙන්නද', category: 'questions', sortOrder: 9 },
  { phonemeId: 'PHO-0230', targetPhoneme: 'ප', script: 'පුළුවන්ද මට උදව්වක්', category: 'questions', sortOrder: 10 },

  // ══════════ PROVERBS (කියමන්) ══════════
  { phonemeId: 'PHO-0231', targetPhoneme: 'ග', script: 'ගිහින් ආවා කියලා ගසක් නැත', category: 'proverbs', sortOrder: 1 },
  { phonemeId: 'PHO-0232', targetPhoneme: 'උ', script: 'උගත්කම උතුම් සැපතකි', category: 'proverbs', sortOrder: 2 },
  { phonemeId: 'PHO-0233', targetPhoneme: 'ස', script: 'සිතට දැනෙන දේ සැබෑ වෙයි', category: 'proverbs', sortOrder: 3 },
  { phonemeId: 'PHO-0234', targetPhoneme: 'ඉ', script: 'ඉවසීම ශක්තියකි', category: 'proverbs', sortOrder: 4 },
  { phonemeId: 'PHO-0235', targetPhoneme: 'ක', script: 'කියන්නාගේ පව් අහන්නාගේ කනට', category: 'proverbs', sortOrder: 5 },

  // ══════════ FILLERS & COMMON PHRASES ══════════
  { phonemeId: 'PHO-0236', targetPhoneme: 'ඒ', script: 'ඒක ඉතින් එහෙමයි නේද', category: 'common-phrases', sortOrder: 1 },
  { phonemeId: 'PHO-0237', targetPhoneme: 'ඔ', script: 'ඔව් ඔව් හරි තමයි', category: 'common-phrases', sortOrder: 2 },
  { phonemeId: 'PHO-0238', targetPhoneme: 'ස', script: 'සුබ රාත්‍රියක් වේවා', category: 'common-phrases', sortOrder: 3 },
  { phonemeId: 'PHO-0239', targetPhoneme: 'ආ', script: 'ආයුබෝවන් ඔබට සාදරයෙන් පිළිගනිමු', category: 'common-phrases', sortOrder: 4 },
  { phonemeId: 'PHO-0240', targetPhoneme: 'ස', script: 'ස්තුතියි ගොඩක් උදව් කළා', category: 'common-phrases', sortOrder: 5 },
  { phonemeId: 'PHO-0241', targetPhoneme: 'ස', script: 'සමාවෙන්න මම ප්‍රමාද වුණා', category: 'common-phrases', sortOrder: 6 },
  { phonemeId: 'PHO-0242', targetPhoneme: 'ඕ', script: 'ඕනෑ නැහැ ඒක කරන්න', category: 'common-phrases', sortOrder: 7 },
  { phonemeId: 'PHO-0243', targetPhoneme: 'හ', script: 'හැමදාම සතුටින් ඉන්න', category: 'common-phrases', sortOrder: 8 },
  { phonemeId: 'PHO-0244', targetPhoneme: 'ජ', script: 'ජය වේවා ඔබට හැම විටම', category: 'common-phrases', sortOrder: 9 },
  { phonemeId: 'PHO-0245', targetPhoneme: 'ම', script: 'මම හෙට එනවා ඔබ ළඟට', category: 'common-phrases', sortOrder: 10 },

  // ══════════ ADDITIONAL COVERAGE ══════════
  { phonemeId: 'PHO-0246', targetPhoneme: 'ඬ', script: 'ඬහැර ගසා කියමනක් කළේය', category: 'rare-phonemes', sortOrder: 1 },
  { phonemeId: 'PHO-0247', targetPhoneme: 'ඳ', script: 'සඳ එළිය ගඳ මල් මත වැටුණා', category: 'rare-phonemes', sortOrder: 2 },
  { phonemeId: 'PHO-0248', targetPhoneme: 'ඹ', script: 'කොඹ උඩ ඉඳලා බැහැපු කඹ', category: 'rare-phonemes', sortOrder: 3 },
  { phonemeId: 'PHO-0249', targetPhoneme: 'ඟ', script: 'අඟුරු ළිඟ මත නැඟ සිටියා', category: 'rare-phonemes', sortOrder: 4 },
  { phonemeId: 'PHO-0250', targetPhoneme: 'ඞ', script: 'අඞ්ගම අඞ්ගයෙන් අඞ්ගය පරීක්ෂා කළේය', category: 'rare-phonemes', sortOrder: 5 },
];

try {
  // Clear existing data
  await connection.execute('DELETE FROM phonemes');
  console.log('✓ Cleared existing phoneme data');

  // Insert new data
  for (const phoneme of phonemes) {
    await connection.execute(
      'INSERT INTO phonemes (phonemeId, targetPhoneme, script, category, sortOrder) VALUES (?, ?, ?, ?, ?)',
      [phoneme.phonemeId, phoneme.targetPhoneme, phoneme.script, phoneme.category, phoneme.sortOrder]
    );
  }
  console.log(`✓ Seeded ${phonemes.length} phonemes successfully`);
  console.log(`  Categories: ${[...new Set(phonemes.map(p => p.category))].join(', ')}`);
} catch (error) {
  console.error('Error seeding phonemes:', error);
} finally {
  await connection.end();
}
