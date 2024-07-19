function handleReset() {
  if (confirm('정말 취소하시겠습니까?')) {
      return true; // 폼 리셋 허용
  } else {
      return false; // 폼 리셋 차단
  }
}

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCh07luyhcfeB_3enF8r4AdqJg3kzVq2xw",
  authDomain: "suwon-travel-apply.firebaseapp.com",
  databaseURL: "https://suwon-travel-apply-default-rtdb.firebaseio.com",
  projectId: "suwon-travel-apply",
  storageBucket: "suwon-travel-apply.appspot.com",
  messagingSenderId: "529245721012",
  appId: "1:529245721012:web:15f8afe60055cc8935e2e1",
  measurementId: "G-F01RR1R2W3"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function validateForm() {
  const reasons = document.getElementById('reasons').value.trim();
  const wish = document.getElementById('wish').value.trim();

  if (reasons.length < 100) {
    alert('신청 사유 100자 이상 적어주세요.');
    return false;
  }
  if (wish.length < 100) {
    alert('희망 사항 100자 이상 적어주세요.');
    return false;
  }

  return handleSubmit();
}

// 폼 제출 함수
function handleSubmit() {
  if (confirm('정말 신청하시겠습니까?')) {
    alert('신청완료되었습니다');
    submitForm();
    return true; // 폼 제출 허용
  } else {
    return false; // 폼 제출 차단
  }
}

function submitForm() {
  const name = document.getElementById('user-name').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const birth = document.getElementById('user-birth').value;
  const tel = document.getElementById('user-tel').value;
  const emailId = document.getElementById('user-email-id').value;
  const emailDomain = document.getElementById('user-email-domain').value;
  const email = `${emailId}@${emailDomain}`;
  const area1 = document.getElementById('area1').value;
  const area2 = document.getElementById('area2').value;
  const reasons = document.getElementById('reasons').value;
  const wish = document.getElementById('wish').value;

  // 데이터베이스에 데이터 저장
  const newDataRef = database.ref('submissions').push();
  newDataRef.set({
    name,
    gender,
    birth,
    tel,
    email,
    area1,
    area2,
    reasons,
    wish
  }, (error) => {
    if (error) {
      alert('신청서 제출에 실패했습니다. 다시 시도해주세요.');
    } else {
      alert('신청서가 성공적으로 제출되었습니다.');
    }
  });
}
