function handleSubmit() {
  if (confirm('정말 신청하시겠습니까?')) {
      alert('신청완료되었습니다');
      return true; // 폼 제출 허용
  } else {
      return false; // 폼 제출 차단
  }
}

function handleReset() {
  if (confirm('정말 취소하시겠습니까?')) {
      return true; // 폼 리셋 허용
  } else {
      return false; // 폼 리셋 차단
  }
}
