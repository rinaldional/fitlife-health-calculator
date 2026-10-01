const form = document.getElementById('healthForm');
const bmiValue = document.getElementById('bmiValue');
const categoryText = document.getElementById('categoryText');
const idealWeight = document.getElementById('idealWeight');
const calorieValue = document.getElementById('calorieValue');
const insight = document.getElementById('insight');
const bmiMarker = document.getElementById('bmiMarker');

function getBmiCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

function getInsight(category) {
  const messages = {
    Underweight: 'BMI kamu berada di bawah rentang normal. Pertimbangkan pola makan bergizi dan konsultasi dengan ahli kesehatan bila diperlukan.',
    Normal: 'BMI kamu berada dalam rentang normal. Pertahankan pola makan seimbang, aktivitas fisik, dan tidur yang cukup.',
    Overweight: 'BMI kamu berada di atas rentang normal. Aktivitas fisik rutin dan pengaturan asupan kalori dapat membantu menjaga kesehatan.',
    Obese: 'BMI kamu masuk kategori obese. Sebaiknya diskusikan rencana kesehatan yang aman dengan tenaga kesehatan profesional.'
  };
  return messages[category];
}

function calculateBmr(gender, age, weight, height) {
  // Mifflin-St Jeor equation
  const base = (10 * weight) + (6.25 * height) - (5 * age);
  return gender === 'male' ? base + 5 : base - 161;
}

function calculateHealthData({ gender, age, weight, height, activity }) {
  const heightMeter = height / 100;
  const bmi = weight / (heightMeter * heightMeter);
  const category = getBmiCategory(bmi);
  const idealTarget = 22 * heightMeter * heightMeter;
  const idealLow = 18.5 * heightMeter * heightMeter;
  const idealHigh = 24.9 * heightMeter * heightMeter;
  const calories = calculateBmr(gender, age, weight, height) * activity;

  return {
    bmi,
    category,
    idealTarget,
    idealLow,
    idealHigh,
    calories
  };
}

function updateMarker(bmi) {
  const min = 14;
  const max = 38;
  const clamped = Math.min(Math.max(bmi, min), max);
  const percentage = ((clamped - min) / (max - min)) * 100;
  bmiMarker.style.left = `${percentage}%`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    gender: document.getElementById('gender').value,
    age: Number(document.getElementById('age').value),
    weight: Number(document.getElementById('weight').value),
    height: Number(document.getElementById('height').value),
    activity: Number(document.getElementById('activity').value)
  };

  if (!data.age || !data.weight || !data.height) {
    insight.textContent = 'Mohon lengkapi semua data terlebih dahulu.';
    return;
  }

  const result = calculateHealthData(data);
  bmiValue.textContent = result.bmi.toFixed(1);
  categoryText.textContent = result.category;
  idealWeight.textContent = `${result.idealTarget.toFixed(1)} kg`;
  calorieValue.textContent = `${Math.round(result.calories).toLocaleString('id-ID')} kkal`;
  insight.textContent = `${getInsight(result.category)} Rentang berat normal untuk tinggi kamu sekitar ${result.idealLow.toFixed(1)}–${result.idealHigh.toFixed(1)} kg.`;
  updateMarker(result.bmi);
});

form.addEventListener('reset', () => {
  setTimeout(() => {
    bmiValue.textContent = '-';
    categoryText.textContent = 'Belum dihitung';
    idealWeight.textContent = '-';
    calorieValue.textContent = '-';
    insight.textContent = 'Isi form di sebelah kiri untuk melihat hasil perhitungan kesehatan dasar.';
    bmiMarker.style.left = '0%';
  });
});
