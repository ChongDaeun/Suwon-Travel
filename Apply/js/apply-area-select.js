const areaData = {
  Seoul: [
    { value: "", text: "== 선택하세요 ==" },
    { value: "Gangnam", text: "강남구" },
    { value: "Gangdong", text: "강동구" },
    { value: "Gangbuk", text: "강북구" },
    { value: "Gangseo", text: "강서구" },
    { value: "Gwanak", text: "관악구" },
    { value: "Gwangjin", text: "광진구" },
    { value: "Guro", text: "구로구" },
    { value: "Geumcheon", text: "금천구" },
    { value: "Nowon", text: "노원구" },
    { value: "Dobong", text: "도봉구" },
    { value: "Dongdaemun", text: "동대문구" },
    { value: "Dongjak", text: "동작구" },
    { value: "Mapo", text: "마포구" },
    { value: "Seodaemun", text: "서대문구" },
    { value: "Seocho", text: "서초구" },
    { value: "Seongdong", text: "성동구" },
    { value: "Seongbuk", text: "성북구" },
    { value: "Songpa", text: "송파구" },
    { value: "Yangcheon", text: "양천구" },
    { value: "Yeongdeungpo", text: "영등포구" },
    { value: "Yongsan", text: "용산구" },
    { value: "Eunpyeong", text: "은평구" },
    { value: "Jongno", text: "종로구" },
    { value: "Jung-gu", text: "중구" },
    { value: "Jungnang", text: "중랑구" }
  ],
  "Gyeonggi-do": [
    { value: "", text: "== 선택하세요 ==" },
    { value: "Gapyeong-gun", text: "가평군" },
    { value: "Goyang", text: "고양특례시" },
    { value: "Gwacheon", text: "과천시" },
    { value: "Gwangmyeong", text: "광명시" },
    { value: "Gwangju", text: "광주시" },
    { value: "Guri", text: "구리시" },
    { value: "Gunpo", text: "군포시" },
    { value: "Gimpo", text: "김포시" },
    { value: "Namyangju", text: "남양주시" },
    { value: "Dongducheon", text: "동두천시" },
    { value: "Bucheon", text: "부천시" },
    { value: "Seongnam", text: "성남시" },
    { value: "Suwon", text: "수원특례시" },
    { value: "Siheung", text: "시흥시" },
    { value: "Ansan", text: "안산시" },
    { value: "Anseong", text: "안성시" },
    { value: "Anyang", text: "안양시" },
    { value: "Yangju", text: "양주시" },
    { value: "Yangpyeong-gun", text: "양평군" },
    { value: "Yeoju", text: "여주시" },
    { value: "Yeoncheon-gun", text: "연천군" },
    { value: "Osan", text: "오산시" },
    { value: "Yongin", text: "용인특례시" },
    { value: "Uiwang", text: "의왕시" },
    { value: "Uijeongbu", text: "의정부시" },
    { value: "Icheon", text: "이천시" },
    { value: "Paju", text: "파주시" },
    { value: "Pyeongtaek", text: "평택시" },
    { value: "Pocheon", text: "포천시" },
    { value: "Hanam", text: "하남시" },
    { value: "Hwaseong", text: "화성시" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const area1 = document.getElementById("area1");
  const area2 = document.getElementById("area2");
  const subAreaGroup = document.getElementById("area2");

  area1.addEventListener("change", (event) => {
    const selectedArea = event.target.value;

    if (selectedArea && areaData[selectedArea]) {
      area2.innerHTML = '';
      areaData[selectedArea].forEach(subArea => {
        const option = document.createElement("option");
        option.value = subArea.value;
        option.textContent = subArea.text;
        area2.appendChild(option);
      });
      area2.options[0].disabled = true;
      subAreaGroup.style.display = "block";
    } else {
      subAreaGroup.style.display = "none";
    }
  });
});
