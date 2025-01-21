export const navigationLinks = [
    {
      href: "/library",
      label: "Library",
    },
  
    {
      img: "/icons/user.svg",
      selectedImg: "/icons/user-fill.svg",
      href: "/my-profile",
      label: "My Profile",
    },
  ];
  
export const adminSideBarLinks = [
    {
      img: "/icons/admin/home.svg",
      route: "/admin",
      text: "Home",
    },
    {
      img: "/icons/admin/users.svg",
      route: "/admin/users",
      text: "All Users",
    },
    {
      img: "/icons/admin/video_library.svg",
      route: "/admin/contents",
      text: "All Contents",
    },
    {
      img: "/icons/admin/card_membership.svg",
      route: "/admin/membership-requests",
      text: "Membership Requests",
    },
    {
      img: "/icons/admin/manage_account.svg",
      route: "/admin/account-requests",
      text: "Account Requests",
    },
  ];
  
export const FIELD_NAMES = {
    fullName: "Full name",
    email: "Email",
    age: "Age",
    avatar: "Avatar",
    password: "Password",
    confirmPassword: "Confirm password",
};
  
export const FIELD_TYPES = {
    fullName: "text",
    email: "email",
    age: "number",
    password: "password",
    confirmPassword: "password",
};
  
export const sampleContents = [
    {
      id: 1,
      title: "처절한 블라인드 소개팅 데이트",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 4230,
      rating: 99.0,
      description:
        "하트시그널, 솔로지옥, 환승연애? 베타메일 그 자체, 극 사실주의 하남자 소개팅을 소개합니다. 이 남자의 처절한 몸부림을 기억해주세요.",
      color: "#fffdf6",
      cover: "/thumbnails/blind_date_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=7ts34mXUF_s",
      summary:
        "하트시그널, 솔로지옥, 환승연애? 베타메일 그 자체, 극 사실주의 하남자 소개팅을 소개합니다. 이 남자의 처절한 몸부림을 기억해주세요.",
      isSubscribed: true,
    },
    {
      id: 2,
      title: "개노답 몸치들의 처절한 뉴진스 How Sweet 안무 커버 배틀",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 324,
      rating: 100.0,
      description:
        "몸치라도 가끔 유행을 따라가고싶다..! 개노답 몸치 두명의 처절한 뉴진스 How Sweet 커버 도전기! 케이팝의 길은 멀고도 험하다~",
      color: "#1c1f40",
      cover: "/thumbnails/dance_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=0YG217oSzF4",
      summary:
        "몸치라도 가끔 유행을 따라가고싶다..! 개노답 몸치 두명의 처절한 뉴진스 How Sweet 커버 도전기! 케이팝의 길은 멀고도 험하다~",
      isSubscribed: true,
    },
    {
      id: 3,
      title: "뉴욕 폐급 서빙 알바 브이로그 (혈압주의)",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 2636,
      rating: 97.0,
      description:
        "뉴욕 미모의 여사장님이 운영하는 맥주가게에서 홀 서빙 알바를 체험해보자! 과연 알바생은 폐급일까 에이스일까?",
      color: "#f8e036",
      cover:
        "/thumbnails/beer_garden_thumbnail_final2.jpg",
      video: "https://www.youtube.com/watch?v=MhpV1_j5IR4",
      summary:
        "뉴욕 미모의 여사장님이 운영하는 맥주가게에서 홀 서빙 알바를 체험해보자! 과연 알바생은 폐급일까 에이스일까?",
      isSubscribed: true,
    },
    {
      id: 4,
      title: "먹는순간 눈앞이 흑백으로 변하는 개노답 요리대결",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 300,
      rating: 93.8,
      description:
        "양지에 백종원 & 안성재가 있다면, 음지에는 범피스트가 있다. 요리에 요자도 모르는 요알못 둘이서 선보이는 개노답 대환장 요리대결. 암살시도 절대 아니고 요리경연입니다.",
      color: "#ed6322",
      cover:
        "/thumbnails/black_white_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=qlyHiT2QGPg",
      summary:
        "양지에 백종원 & 안성재가 있다면, 음지에는 범피스트가 있다. 요리에 요자도 모르는 요알못 둘이서 선보이는 개노답 대환장 요리대결. 암살시도 절대 아니고 요리경연입니다.",
    },
    {
      id: 5,
      title: "눈 떠보니 자동차가 털려있다",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 8295,
      rating: 97.3,
      description:
        "하루아침에 바퀴 네 짝이 모두 사라지고 창문이 깨져있다..! 범인을 찾으려 cctv를 돌려본 결과.. 대체 무슨 일이 있었던 건지 알아보자!",
      color: "#ffffff",
      cover: "/thumbnails/car_stolen_thumbnail.jpg",
      video: "https://www.youtube.com/watch?v=LdhhOHD3E54",
      summary:
        "하루아침에 바퀴 네 짝이 모두 사라지고 창문이 깨져있다..! 범인을 찾으려 cctv를 돌려본 결과.. 대체 무슨 일이 있었던 건지 알아보자!",
    },
    {
      id: 6,
      title: "뉴욕 길거리 음식 전쟁! 할랄가이즈 vs 아델스 페이머스 할랄",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 7654,
      rating: 90.0,
      description:
        "지금 뉴욕에서는 길거리 음식의 왕좌를 두고 아주 치열한 전쟁이 진행되고 있다! 길거리 음식의 왕, The Halal Guys 할랄가이즈. 그리고 그 왕좌에 도전하는 Adel's Famous Halal Food 아델스 페이머스 할랄! 과연 누가 왕좌의 자리에 오를 것인가! 직접 체험해 보자.",
      color: "#080c0d",
      cover:
        "/thumbnails/halal_thumb.jpg",
      video: "https://www.youtube.com/watch?v=DlsAysI0Duc",
      summary:
        "지금 뉴욕에서는 길거리 음식의 왕좌를 두고 아주 치열한 전쟁이 진행되고 있다! 길거리 음식의 왕, The Halal Guys 할랄가이즈. 그리고 그 왕좌에 도전하는 Adel's Famous Halal Food 아델스 페이머스 할랄! 과연 누가 왕좌의 자리에 오를 것인가! 직접 체험해 보자.",
    },
    {
      id: 7,
      title: "패알못들의 뉴욕 초저가 쇼핑",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 380,
      rating: 100.0,
      description:
        "최저가로 옷 한 벌 장만하고 뉴욕 패션위크를 대비해보자!",
      color: "#100f15",
      cover:
        "/thumbnails/fashion_week_thumb_final.jpg",
      video: "https://www.youtube.com/watch?v=Shwv3m_bdrE",
      summary:
        "최저가로 옷 한 벌 장만하고 뉴욕 패션위크를 대비해보자!",
    },
    {
      id: 8,
      title: "어딘가 살짝 이상한 마사지",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 1392,
      rating: 95.5,
      description:
        "인도 사람들이 모여 사는 동네, New York, Queens 에 있는 Jackson Heights 에 왔다! 간단한 인도식 머리 마사지를 받으러 왔는데, 뭔가 이상하다..?!",
      color: "#ffffff",
      cover:
        "/thumbnails/jackson_height_thumb2.jpg",
      video: "https://www.youtube.com/watch?v=4fRoEjlcwkE",
      summary:
        "인도 사람들이 모여 사는 동네, New York, Queens 에 있는 Jackson Heights 에 왔다! 간단한 인도식 머리 마사지를 받으러 왔는데, 뭔가 이상하다..?!",
    },
    {
      id: 9,
      title: "뉴욕 빈티지 다이너에서 정국 노래를 틀어보았다!",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 45411,
      rating: 98.4,
      description:
        "영화, 드라마 촬영에도 자주 나왔던 뉴욕의 유명 감성 빈티지 다이너! 이게 진짜 다이너지. 마치 타임머신을 타고 돌아간 듯한 감성 그리고 맛있는 음식! 낡아 보이는 쥬크박스에는 반가운 이름, BTS 정국 님이?! 빈티지 다이너에 정국 노래를 틀어보자!",
      color: "#ffffff",
      cover:
        "/thumbnails/diner_thumbnail_final.jpg",
      video: "https://www.youtube.com/watch?v=-n6jcFufYOU",
      summary:
        "영화, 드라마 촬영에도 자주 나왔던 뉴욕의 유명 감성 빈티지 다이너! 이게 진짜 다이너지. 마치 타임머신을 타고 돌아간 듯한 감성 그리고 맛있는 음식! 낡아 보이는 쥬크박스에는 반가운 이름, BTS 정국 님이?! 빈티지 다이너에 정국 노래를 틀어보자!",
    },
    {
      id: 10,
      title: "마약이 판을 친다! 심각한 뉴욕 지하철 상태",
      author: "Jaedon Lee (BumpEast)",
      genre: "vlog",
      views: 3687,
      rating: 96.3,
      description:
        "전 세계 어디보다도 가장 화려하고 멋진 도시였던 뉴욕시티, 하지만 더 이상 그렇지 않다. 너무나도 심각한 마약 문제로 인해, 지금은 사상 최악의 치안 상태를 경험하고 있다. 더 심해지기 전에 무언가 조치가 필요하다!",
      color: "#ffffff",
      cover:
        "/thumbnails/subway_thumbnail_final_2.jpg",
      video: "https://www.youtube.com/watch?v=lsXxU6Nvt2w",
      summary:
        "전 세계 어디보다도 가장 화려하고 멋진 도시였던 뉴욕시티, 하지만 더 이상 그렇지 않다. 너무나도 심각한 마약 문제로 인해, 지금은 사상 최악의 치안 상태를 경험하고 있다. 더 심해지기 전에 무언가 조치가 필요하다!",
    },
];