// script.js - Full 89-question quiz data + logic

const quizData = [
  { q: "1. What major river system provided fertile land for early settlements in ancient India?",
    options: ["Indus River", "Nile River", "Tigris-Euphrates River", "Yellow River"],
    answer: "Indus River" },

  { q: "2. The Harappan civilization was located in which present-day country?",
    options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
    answer: "Pakistan" },

  { q: "3. The Indus Valley Civilization is also known as the __________.",
    options: ["Harappan Civilization", "Aryan Civilization", "Mughal Empire", "Gupta Dynasty"],
    answer: "Harappan Civilization" },

  { q: "4. Which region of ancient India is considered the birthplace of Hinduism?",
    options: ["Punjab", "Rajasthan", "Gujarat", "Uttar Pradesh"],
    answer: "Uttar Pradesh" },

  { q: "5. The ancient Indian city of Varanasi is situated on the banks of which river?",
    options: ["Ganges", "Yamuna", "Saraswati", "Brahmaputra"],
    answer: "Ganges" },

  { q: "6. Which of the following ancient Indian cities was a major center of learning and education?",
    options: ["Takṣaśilā", "Mathura", "Ayodhya", "Pataliputra"],
    answer: "Takṣaśilā" },

  { q: "7. Which ancient Indian university was renowned for its teachings in various fields, including philosophy and Buddhism?",
    options: ["Nalanda University", "Taxila University", "Vikramshila University", "Pushpagiri University"],
    answer: "Nalanda University" },

  { q: "8. The ancient Indian education system primarily emphasized the study of __________.",
    options: ["All of the above", "Mathematics", "Philosophy", "Medicine"],
    answer: "All of the above" },

  { q: "9. The transition from hunting and gathering to agriculture in ancient India led to the development of __________.",
    options: ["All of the above", "Social hierarchies", "Trade networks", "Permanent settlements"],
    answer: "Permanent settlements" },

  { q: "10. The earliest known agricultural settlements in ancient India were located in the region of __________.",
    options: ["Punjab", "Bihar", "Gujarat", "Rajasthan"],
    answer: "Punjab" },

  { q: "11. The Vedas are a collection of ancient Indian __________.",
    options: ["Religious texts", "Philosophical treatises", "Epic poems", "Legal codes"],
    answer: "Religious texts" },

  { q: "12. The oldest Veda is the __________.",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    answer: "Rigveda" },

  { q: "13. The Upanishads are a collection of texts that explore __________.",
    options: ["Philosophical ideas", "Yoga and meditation", "Mythology and folklore", "Rituals and sacrifices"],
    answer: "Philosophical ideas" },

  { q: "14. The Bhagavad Gita is a part of which ancient Indian epic?",
    options: ["Mahabharata", "Puranas", "Ramayana", "Upanishads"],
    answer: "Mahabharata" },

  { q: "15. The Ramayana and the Mahabharata are considered two of the greatest Indian __________.",
    options: ["Epics", "Temples", "Festivals", "Sculptures"],
    answer: "Epics" },

  { q: "16. The Ramayana tells the story of the prince __________.",
    options: ["Rama", "Krishna", "Arjuna", "Hanuman"],
    answer: "Rama" },

  { q: "17. Which festival celebrates the victory of good over evil and is associated with the story of Lord Rama?",
    options: ["Diwali", "Holi", "Durga Puja", "Navaratri"],
    answer: "Diwali" },

  { q: "18. The festival of Holi is known for its vibrant colors and the celebration of __________.",
    options: ["All of the above", "Harvest and fertility", "Victory of good over evil", "Love and friendship"],
    answer: "All of the above" },

  { q: "19. The Kumbh Mela, a major Hindu pilgrimage, is held every __________ years.",
    options: ["12", "4", "6", "2"],
    answer: "12" },

  { q: "20. The ancient Indian festival of Navaratri is dedicated to the worship of __________.",
    options: ["Goddess Durga", "Lord Shiva", "Lord Vishnu", "Lord Ganesha"],
    answer: "Goddess Durga" },

  { q: "21. The concept of 'Ahimsa' (non-violence) was most strongly advocated by which historical figure?",
    options: ["Mahavira", "Gautama Buddha", "Ashoka the Great", "Emperor Akbar"],
    answer: "Mahavira" },

  { q: "22. The Maurya Empire reached its greatest extent under the rule of which emperor?",
    options: ["Ashoka the Great", "Bindusara", "Chandragupta Maurya", "Chandragupta II"],
    answer: "Ashoka the Great" },

  { q: "23. The Arthashastra, an ancient Indian treatise on statecraft, was written by __________.",
    options: ["Chanakya", "Kalidasa", "Panini", "Vishnu Sharma"],
    answer: "Chanakya" },

  { q: "24. The Gupta Empire is known for its contributions to which field?",
    options: ["All of the above", "Art and literature", "Architecture", "Science and mathematics"],
    answer: "All of the above" },

  { q: "25. Which ancient Indian astronomer is known for his accurate calculation of the value of pi?",
    options: ["Aryabhata", "Brahmagupta", "Brahmagupta", "Bhaskara II"],
    answer: "Aryabhata" },

  { q: "26. The Chola dynasty of ancient India was known for its advancements in __________.",
    options: ["All of the above", "Temple architecture", "Administration", "Maritime trade"],
    answer: "All of the above" },

  { q: "27. The Sultanate of Delhi was established by which Islamic ruler in the 13th century?",
    options: ["Qutb-ud-din Aibak", "Muhammad bin Tughlaq", "Babur", "Alauddin Khilji"],
    answer: "Qutb-ud-din Aibak" },

  { q: "28. The Mughal Empire in India was founded by __________.",
    options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
    answer: "Babur" },

  { q: "29. The Taj Mahal, a UNESCO World Heritage Site, was built during the reign of which Mughal emperor?",
    options: ["Shah Jahan", "Jahangir", "Akbar", "Aurangzeb"],
    answer: "Shah Jahan" },

  { q: "30. The Battle of Plassey in 1757 marked the beginning of British colonial rule in which region of India?",
    options: ["Bengal", "Punjab", "Maharashtra", "Tamil Nadu"],
    answer: "Bengal" },

  { q: "31. The Indian Rebellion of 1857, also known as the Sepoy Mutiny, was triggered by the use of which ammunition?",
    options: ["Cartridges greased with cow and pig fat", "Cartridges greased with coconut oil", "Cartridges greased with ghee", "Cartridges greased with vegetable oil"],
    answer: "Cartridges greased with cow and pig fat" },

  { q: "32. The Indian National Congress was formed in which year?",
    options: ["1885", "1857", "1905", "1947"],
    answer: "1885" },

  { q: "33. The partition of India and Pakistan occurred in which year?",
    options: ["1947", "1945", "1950", "1962"],
    answer: "1947" },

  { q: "34. The Indian independence movement was led by prominent leaders such as __________.",
    options: ["All of the above", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    answer: "All of the above" },

  { q: "35. The first Prime Minister of India was __________.",
    options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Rajiv Gandhi"],
    answer: "Jawaharlal Nehru" },

  { q: "36. The ancient Indian game of chess, known as 'Chaturanga,' originated during which time period?",
    options: ["Mauryan period", "Vedic period", "Gupta period", "Mughal period"],
    answer: "Gupta period" },

  { q: "37. The traditional Indian system of medicine, which emphasizes a holistic approach to health, is known as __________.",
    options: ["All of the above", "Ayurveda", "Siddha", "Unani"],
    answer: "Ayurveda" },

  { q: "38. The Indian state of Kerala is known for its traditional martial art form called __________.",
    options: ["Kalaripayattu", "Kathakali", "Bharatanatyam", "Odissi"],
    answer: "Kalaripayattu" },

  { q: "39. The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
    options: ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
    answer: "Rashtrakuta dynasty" },

  { q: "40. The Konark Sun Temple, a UNESCO World Heritage Site, is located in which Indian state?",
    options: ["Odisha", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
    answer: "Odisha" },

  { q: "41. The famous poet and playwright Kalidasa lived during the reign of which ancient Indian dynasty?",
    options: ["Gupta dynasty", "Maurya dynasty", "Chola dynasty", "Vijayanagara dynasty"],
    answer: "Gupta dynasty" },

  { q: "42. The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
    options: ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
    answer: "Rashtrakuta dynasty" },

  { q: "43. The official language of the Maurya Empire was __________.",
    options: ["Sanskrit", "Pali", "Prakrit", "Tamil"],
    answer: "Prakrit" },

  { q: "44. The Golden Age of ancient Indian culture and arts flourished under the patronage of which dynasty?",
    options: ["Gupta dynasty", "Mughal dynasty", "Maurya dynasty", "Chola dynasty"],
    answer: "Gupta dynasty" },

  { q: "45. The city of Agra, known for the Taj Mahal, served as the capital of which Mughal emperor?",
    options: ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
    answer: "Shah Jahan" },

  { q: "46. The Battle of Plassey in 1757 was fought between the forces of the British East India Company and __________.",
    options: ["Mughal Empire", "Maratha Empire", "Sikh Empire", "Bengal Sultanate"],
    answer: "Bengal Sultanate" },

  { q: "47. The Swadeshi movement, which aimed at promoting Indian-made products, was a part of the __________.",
    options: ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Khilafat Movement"],
    answer: "Non-Cooperation Movement" },

  { q: "48. The Dandi March, a significant event in the Indian independence movement, was led by __________.",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"],
    answer: "Mahatma Gandhi" },

  { q: "49. The Indian state of Tamil Nadu is known for its classical dance form called __________.",
    options: ["Bharatanatyam", "Kathak", "Manipuri", "Kuchipudi"],
    answer: "Bharatanatyam" },

  { q: "50. The city of Varanasi is considered a holy site in which two major religions?",
    options: ["Hinduism and Buddhism", "Hinduism and Jainism", "Buddhism and Sikhism", "Jainism and Sikhism"],
    answer: "Hinduism and Buddhism" },

  { q: "51. The Red Fort, a historic fort complex in Delhi, was constructed by which Mughal emperor?",
    options: ["Shah Jahan", "Aurangzeb", "Akbar", "Jahangir"],
    answer: "Shah Jahan" },

  { q: "52. The ancient city of Hampi, a UNESCO World Heritage Site, was the capital of which empire?",
    options: ["Vijayanagara Empire", "Chola Empire", "Pallava Empire", "Hoysala Empire"],
    answer: "Vijayanagara Empire" },

  { q: "53. The Sanchi Stupa, an important Buddhist monument, is located in which Indian state?",
    options: ["Madhya Pradesh", "Bihar", "Uttar Pradesh", "Maharashtra"],
    answer: "Madhya Pradesh" },

  { q: "54. The Jallianwala Bagh massacre, a tragic incident during the British colonial rule, took place in which Indian city?",
    options: ["Amritsar", "Mumbai", "Kolkata", "Lahore"],
    answer: "Amritsar" },

  { q: "55. The Indian National Army (INA), also known as the Azad Hind Fauj, was formed by __________.",
    options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
    answer: "Subhas Chandra Bose" },

  { q: "56. The first President of India was __________.",
    options: ["Rajendra Prasad", "Jawaharlal Nehru", "Indira Gandhi", "Dr. B.R. Ambedkar"],
    answer: "Rajendra Prasad" },

  { q: "57. The state of Punjab was divided during the partition of India, with a portion going to __________.",
    options: ["Pakistan", "Bangladesh", "Nepal", "Sri Lanka"],
    answer: "Pakistan" },

  { q: "58. The Quit India Movement was launched in which year?",
    options: ["1942", "1945", "1947", "1950"],
    answer: "1942" },

  { q: "59. The Constituent Assembly of India adopted the Constitution of India in which year?",
    options: ["1949", "1947", "1950", "1952"],
    answer: "1949" },

  { q: "60. The city of Mumbai was previously known by which name during the British colonial rule?",
    options: ["Bombay", "Madras", "Calcutta", "Chennai"],
    answer: "Bombay" },

  { q: "61. The Indian state of Rajasthan is known for its vibrant folk dance form called __________.",
    options: ["Ghoomar", "Bhangra", "Garba", "Kathakali"],
    answer: "Ghoomar" },

  { q: "62. The famous Ajanta and Ellora Caves are located in which Indian state?",
    options: ["Maharashtra", "Karnataka", "Uttar Pradesh", "Tamil Nadu"],
    answer: "Maharashtra" },

  { q: "63. The Rigveda, the oldest of the Vedas, is composed in which ancient Indian language?",
    options: ["Sanskrit", "Prakrit", "Pali", "Tamil"],
    answer: "Sanskrit" },

  { q: "64. The Mahabharata is an ancient Indian epic that tells the story of a great __________.",
    options: ["War", "Journey", "Love story", "Spiritual quest"],
    answer: "War" },

  { q: "65. The festival of Raksha Bandhan celebrates the bond between __________.",
    options: ["Brothers and sisters", "Parents and children", "Husband and wife", "Friends and relatives"],
    answer: "Brothers and sisters" },

  { q: "66. The famous Sun Temple at Konark is dedicated to which Hindu deity?",
    options: ["Sun God (Surya)", "Lord Shiva", "Lord Vishnu", "Lord Brahma"],
    answer: "Sun God (Surya)" },

  { q: "67. Takshashila, an ancient center of learning, is located in present-day:",
    options: ["India", "Afghanistan", "Pakistan", "Nepal"],
    answer: "Pakistan" },

  { q: "68. Takshashila University is associated with the famous ancient Indian scholar:",
    options: ["Chanakya", "Aryabhata", "Nagarjuna", "Kalidasa"],
    answer: "Chanakya" },

  { q: "69. Which ancient Indian philosopher is credited with establishing the philosophical school of Nyaya?",
    options: ["Adi Shankaracharya", "Charaka", "Gautama Buddha", "Gotama Maharishi"],
    answer: "Gotama Maharishi" },

  { q: "70. The ancient Indian text 'Nalanda Mahavira' provides insights into:",
    options: ["The principles of non-violence", "The art of warfare and strategy", "The history of Nalanda University", "Vedic mathematics and astronomy"],
    answer: "The history of Nalanda University" },

  { q: "71. The transition from hunting-gathering to agriculture in ancient India led to the development of:",
    options: ["Advanced trade routes", "Urban civilizations", "Metalworking techniques", "The caste system"],
    answer: "Urban civilizations" },

  { q: "72. The concept of 'Yajna' in ancient Vedic society was associated with:",
    options: ["Hunting rituals", "Agricultural festivals", "Fire sacrifices and rituals", "Temple construction"],
    answer: "Fire sacrifices and rituals" },

  { q: "73. The agricultural treatise 'Kautilya's Arthashastra' provides insights into:",
    options: ["Techniques for irrigation and water management", "Architecture and temple construction", "Military strategies and warfare", "Medicine and healing practices"],
    answer: "Techniques for irrigation and water management" },

  { q: "74. The Upanishads are a collection of texts that primarily explore:",
    options: ["Social and political issues in ancient India", "Mystical and philosophical concepts", "The life of Lord Krishna", "Agricultural practices and techniques"],
    answer: "Mystical and philosophical concepts" },

  { q: "75. The term 'Jataka' in ancient Indian literature refers to:",
    options: ["Fables and folktales", "Treatises on agriculture", "Sacred rituals and hymns", "Ancient medical texts"],
    answer: "Fables and folktales" },

  { q: "76. The Rigveda primarily consists of:",
    options: ["Rituals and ceremonies", "Philosophical hymns and prayers", "Historical accounts of ancient India", "Love poetry and epics"],
    answer: "Philosophical hymns and prayers" },

  { q: "77. The concept of 'Atman' in the Upanishads refers to:",
    options: ["The eternal soul or self", "The ruler of a kingdom", "A sacred dance form", "A type of Vedic sacrifice"],
    answer: "The eternal soul or self" },

  { q: "78. The character of Draupadi in the Mahabharata is known for her exceptional skills in:",
    options: ["Archery", "Diplomacy and statecraft", "Singing and dancing", "Healing and medicine"],
    answer: "Diplomacy and statecraft" },

  { q: "79. The Iron Pillar of Delhi, known for its rust-resistant composition, dates back to the time of __________.",
    options: ["Gupta dynasty", "Chandragupta Maurya", "Ashoka the Great", "Harsha Vardhana"],
    answer: "Gupta dynasty" },

  { q: "80. The term 'Dharma' in ancient Indian context refers to __________.",
    options: ["Religious duty and righteousness", "Social status and caste", "Political power and authority", "Material wealth and prosperity"],
    answer: "Religious duty and righteousness" },

  { q: "81. Which ancient Indian civilization is known for its well-planned cities and advanced drainage systems?",
    options: ["Harappa", "Mohenjo-Daro", "Vedic civilization", "Mauryan Empire"],
    answer: "Harappa" },

  { q: "82. The ancient Indian text 'Arthashastra' primarily focuses on:",
    options: ["Statecraft and political governance", "Religious rituals and ceremonies", "Astrological predictions", "Trade and commerce in ancient India"],
    answer: "Statecraft and political governance" },

  { q: "83. The ancient Indian term 'Janapada' refers to:",
    options: ["A class of Vedic priests", "An advanced form of agricultural tools", "A republic or territorial state", "A sacred dance form in ancient India"],
    answer: "A republic or territorial state" },

  { q: "84. The 'Aranyakas' in ancient Vedic literature are associated with:",
    options: ["Rituals and sacrifices", "Rules of warfare", "Forest dwellers and hermits", "Art and architecture"],
    answer: "Forest dwellers and hermits" },

  { q: "85. The ancient Indian system of education, where students lived with their teachers in an ashram, was known as:",
    options: ["Gurukula", "University", "Madrasa", "Monastery"],
    answer: "Gurukula" },

  { q: "86. Nalanda University was a renowned center for the study of:",
    options: ["Medicine and surgery", "Astronomy and astrology", "Buddhism and other subjects", "Vedic literature and rituals"],
    answer: "Buddhism and other subjects" },

  { q: "87. The decline of Nalanda University was primarily due to:",
    options: ["Invasion and destruction by foreign armies", "Lack of funding and support from rulers", "Emergence of other competing universities", "Internal conflicts and disputes among scholars"],
    answer: "Invasion and destruction by foreign armies" },

  { q: "88. Makar Sankranti is celebrated to mark the transition of the Sun into which zodiac sign?",
    options: ["Aries", "Cancer", "Libra", "Capricorn"],
    answer: "Capricorn" },

  { q: "89. The Great Bath, an important structure in the ancient city of Mohenjo-daro, was used for __________.",
    options: ["Ritual bathing", "Drinking water", "Animal sacrifices", "Community gatherings"],
    answer: "Ritual bathing" }
];

// ---------- Quiz UI logic ----------
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Build quiz HTML
function buildQuiz() {
  const output = [];
  quizData.forEach((item, index) => {
    // create options HTML
    const optionsHtml = item.options.map(opt =>
      `<label class="option"><input type="radio" name="q${index}" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label>`
    ).join("<br>");
    output.push(`<div class="question"><p><strong>${index+1}.</strong> ${escapeHtml(item.q.replace(/^\d+\.\s*/, ""))}</p>${optionsHtml}</div>`);
  });
  quizContainer.innerHTML = output.join("\n");
}

// Show results and highlight correct/wrong (basic)
function showResults() {
  let score = 0;
  quizData.forEach((item, index) => {
    const selector = `input[name="q${index}"]:checked`;
    const selected = document.querySelector(selector);
    const qDiv = quizContainer.children[index];
    // clear any previous mark
    if (qDiv) qDiv.classList.remove("correct", "wrong");

    if (selected) {
      if (selected.value === item.answer) {
        score++;
        if (qDiv) qDiv.classList.add("correct");
      } else {
        if (qDiv) qDiv.classList.add("wrong");
      }
    } else {
      // unanswered - mark as wrong visually (optional)
      if (qDiv) qDiv.classList.add("wrong");
    }
  });
  resultsContainer.innerHTML = `✅ You scored ${score} out of ${quizData.length}.`;
  // Optionally show a short message
  if (score === quizData.length) {
    resultsContainer.innerHTML += " Perfect! Well done.";
  } else if (score >= quizData.length * 0.7) {
    resultsContainer.innerHTML += " Great job — pretty strong performance.";
  } else {
    resultsContainer.innerHTML += " Keep practicing!";
  }
}

// small helper to escape HTML in option text (avoid breaking HTML)
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// initialize
buildQuiz();
submitButton.addEventListener("click", showResults);
