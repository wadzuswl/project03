// ============================================
// 상품 데이터
// ============================================
// 이 파일은 모든 상품 정보를 담고 있는 데이터 객체입니다.
// 베스트 상품, 신상품, 특가 상품으로 구분되어 있습니다.

// 상품 데이터 객체
const productsData = {
    // 베스트 상품 목록
    best: [
        {
            id: 1,
            title: '동서가구 베스트 서랍장 14종 모음 3단 4단 5단',
            price: 120000,
            salePrice: 69000,
            discount: 43,
            rating: 4.6,
            reviews: 1700,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/4869/image/detail/4869_detail_054.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/4869/image/detail/4869_detail_054.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/4869/image/detail/4869_detail_179.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/4869/image/detail/4869_detail_215.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/4869/image/detail/4869_detail_335.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/4869/image/detail/4869_detail_433.jpg'
            ],
            badge: 'sale',
            badgeText: '43%',
            description: `
    <h3>실용성과 디자인을 모두 갖춘 베스트 서랍장</h3>
    <p>
        동서가구 베스트 서랍장은 다양한 공간에 어울리는 깔끔한 디자인과
        넉넉한 수납력을 갖춘 실속형 가구입니다.
        3단, 4단, 5단 구성으로 용도에 맞게 선택할 수 있어 침실, 거실, 드레스룸 어디에나 잘 어울립니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>3단 · 4단 · 5단 다양한 구성으로 공간에 맞는 선택 가능</li>
        <li>넉넉한 서랍 수납으로 의류, 소품 정리 용이</li>
        <li>심플하고 모던한 디자인으로 어떤 인테리어에도 자연스럽게 조화</li>
        <li>견고한 소재 사용으로 안정감 있는 사용</li>
        <li>서랍 손잡이 디자인으로 편리한 개폐</li>
        <li>침실, 거실, 드레스룸 등 다용도 활용 가능</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>공간에 맞는 서랍장을 찾는 분</li>
        <li>깔끔한 수납과 정리를 원하는 분</li>
        <li>가성비 좋은 서랍장을 찾는 분</li>
    </ul>
`,
            spec: {
                '구성': '3단 / 4단 / 5단 중 선택',
                '용도': '수납장, 서랍장',
                '설치 공간': '침실, 거실, 드레스룸',
                '디자인': '심플 · 모던',
                '서랍 타입': '슬라이드 서랍',
                '특징': '넉넉한 수납, 안정적인 구조',
                '판매 구성': '단품',
                '이벤트': '단독 특가'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김철수',
                    rating: 5,
                    date: '2024.01.15',
                    content: '수납공간이 넉넉해서 옷이랑 잡동사니 정리하기 좋아요. 4단으로 구매했는데 높이도 적당하고 방이 훨씬 깔끔해졌어요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이영희',
                    rating: 4,
                    date: '2024.01.12',
                    content: '가격 대비 마감이 괜찮고 튼튼해 보여요. 단독특가로 구매해서 더 만족스럽습니다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '박민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '디자인이 심플해서 어디에 두어도 잘 어울려요. 거실에 두었는데 인테리어 방해 없이 깔끔합니다.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '최지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '서랍 여닫을 때 부드럽고 수납도 생각보다 많이 됩니다. 침실용으로 쓰기 딱 좋아요.',
                    helpful: 98,
                    verified: false
                },
                {
                    id: 5,
                    author: '정대현',
                    rating: 5,
                    date: '2024.01.05',
                    content: '3단이랑 고민하다가 5단으로 했는데 수납력 차이가 크네요. 가족 옷 정리용으로 잘 쓰고 있습니다.',
                    helpful: 267,
                    verified: true
                }
            ]
        },
        {
            id: 2,
            title: '동서가구 이즈 카이 LED 수납 침대 수퍼싱글 SS 퀸 Q 양면매트',
            price: 478000,
            salePrice: 274000,
            discount: 43,
            rating: 4.8,
            reviews: 14760,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/9854/image/detail/9854_detail_031.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/9854/image/detail/9854_detail_031.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/9854/image/detail/9854_detail_114.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/9854/image/detail/9854_detail_243.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/9854/image/detail/9854_detail_376.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/9854/image/detail/9854_detail_426.jpg'
            ],
            badge: 'hot',
            badgeText: 'HOT',
            description: `
    <h3>수납과 조명을 한 번에 갖춘 실속형 LED 침대</h3>
    <p>
        동서가구 이즈 카이 LED 수납 침대는 침실 공간을 효율적으로 활용할 수 있는
        수납 구조와 은은한 LED 조명이 더해진 실용적인 침대입니다.
        슈퍼싱글(SS)과 퀸(Q) 사이즈 선택이 가능해 라이프스타일에 맞게 사용할 수 있습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>침대 하부 수납 공간으로 공간 활용도 극대화</li>
        <li>헤드 부분 LED 조명으로 편안한 침실 분위기 연출</li>
        <li>슈퍼싱글(SS) · 퀸(Q) 사이즈 선택 가능</li>
        <li>양면 매트리스 사용으로 오래 사용 가능</li>
        <li>심플한 디자인으로 다양한 인테리어에 잘 어울림</li>
        <li>침실 정리와 수납을 동시에 해결할 수 있는 구조</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>침실 수납공간이 부족한 분</li>
        <li>조명이 있는 침대를 찾는 분</li>
        <li>실용성과 디자인을 함께 고려하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '슈퍼싱글(SS) / 퀸(Q)',
                '구성': '침대 프레임 + 양면 매트리스',
                '수납 형태': '하부 수납형',
                '조명': '헤드 LED 조명',
                '매트리스': '양면 사용 가능',
                '용도': '침실용 침대',
                '디자인': '심플 · 모던',
                '특징': '수납 공간, LED 조명'
            },

            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.14',
                    content: '수납공간이 생각보다 넉넉해서 침실이 훨씬 정리된 느낌이에요. LED 조명도 은은해서 만족합니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '강태영',
                    rating: 4,
                    date: '2024.01.11',
                    content: '퀸 사이즈로 구매했는데 공간 차지 크지 않고 안정감 있어요. 전체적으로 무난한 침대입니다.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '윤서연',
                    rating: 5,
                    date: '2024.01.09',
                    content: '양면 매트리스라서 오래 쓸 수 있을 것 같아요. 잠자리도 편안한 편입니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 4,
                    author: '조현우',
                    rating: 4,
                    date: '2024.01.07',
                    content: 'LED 조명이 밤에 책 읽거나 핸드폰 볼 때 은근히 편해요. 침실 분위기도 좋아졌어요.',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 3,
            title: '동서가구 1인 리클라이닝 침대형 의자 게이밍체어 학생의자 BEST 10종 모음',
            price: 220000,
            salePrice: 129000,
            discount: 41,
            rating: 4.7,
            reviews: 567,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5186/image/detail/5186_detail_037.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5186/image/detail/5186_detail_037.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5186/image/detail/5186_detail_149.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5186/image/detail/5186_detail_277.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5186/image/detail/5186_detail_332.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5186/image/detail/5186_detail_485.jpg'
            ],
            badge: 'sale',
            badgeText: '41%',
            description: `
    <h3>편안한 착석감으로 오래 앉아도 부담 없는 리클라이닝 의자</h3>
    <p>
        동서가구 1인 리클라이닝 침대형 의자는 학습과 업무, 휴식까지 모두 고려한
        실용적인 의자입니다.
        등받이 리클라이닝 기능으로 상황에 따라 편안한 자세를 유지할 수 있으며,
        학생의자와 게이밍체어로도 활용하기 좋은 디자인입니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>등받이 리클라이닝 기능으로 다양한 각도 조절 가능</li>
        <li>편안한 쿠션감으로 장시간 사용에도 부담 적음</li>
        <li>학생의자, 게이밍체어, 휴식용 의자로 다용도 활용</li>
        <li>안정적인 구조로 균형감 있는 착석 가능</li>
        <li>심플하면서도 실용적인 디자인</li>
        <li>BEST 10종 구성으로 취향에 맞는 선택 가능</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>오래 앉아 있는 시간이 많은 학생이나 직장인</li>
        <li>공부와 휴식을 모두 고려한 의자를 찾는 분</li>
        <li>가성비 좋은 리클라이닝 의자를 원하는 분</li>
    </ul>
`,

            spec: {
                '구성': '리클라이닝 의자 1종',
                '사용 인원': '1인용',
                '기능': '등받이 리클라이닝',
                '용도': '학생의자 / 게이밍체어 / 휴식용',
                '쿠션': '두툼한 쿠션',
                '디자인': '심플 · 실용',
                '선택 옵션': 'BEST 10종 중 선택',
                '특징': '편안한 착석감, 다용도 활용'
            },

            reviewList: [
                {
                    id: 1,
                    author: '장성호',
                    rating: 5,
                    date: '2024.01.13',
                    content: '등받이가 잘 넘어가서 공부하다가 쉴 때 편하게 쓸 수 있어요. 쿠션감도 괜찮은 편입니다.',
                    helpful: 289,
                    verified: true
                },
                {
                    id: 2,
                    author: '한소영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '학생의자로 구매했는데 생각보다 안정감 있고 오래 앉아 있어도 불편하지 않아요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '오준혁',
                    rating: 4,
                    date: '2024.01.09',
                    content: '게이밍체어로도 무난하게 사용 중이에요. 디자인이 과하지 않아서 마음에 듭니다.',
                    helpful: 156,
                    verified: true
                }
            ]
        },
        {
            id: 4,
            title: '동서가구 테라 라텍스탑 천연면피가죽 3인 4인소파 모음',
            price: 770000,
            salePrice: 573000,
            discount: 26,
            rating: 4.7,
            reviews: 6352,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6410/image/detail/6410_detail_096.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6410/image/detail/6410_detail_096.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6410/image/detail/6410_detail_194.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6410/image/detail/6410_detail_230.jpg'
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg',
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/10/14/B0351685/B0351685_0_600.jpg'
            ],
            badge: 'best',
            badgeText: 'BEST',
            description: `
    <h3>편안함과 고급스러움을 동시에 갖춘 라텍스탑 가죽 소파</h3>
    <p>
        동서가구 테라 라텍스탑 소파는 천연면피가죽을 사용해
        고급스러운 분위기와 편안한 착석감을 함께 느낄 수 있는 소파입니다.
        3인 · 4인 구성으로 거실 공간과 가족 구성에 맞게 선택할 수 있어
        실용적으로 활용하기 좋습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>천연면피가죽 사용으로 부드럽고 고급스러운 촉감</li>
        <li>라텍스탑 쿠션으로 편안한 착석감 제공</li>
        <li>3인 · 4인 소파 구성으로 공간에 맞는 선택 가능</li>
        <li>안정적인 구조로 오랜 사용에도 편안함 유지</li>
        <li>심플하면서도 고급스러운 디자인</li>
        <li>거실 중심 가구로 활용하기 좋은 소파</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>편안한 착석감의 가죽 소파를 찾는 분</li>
        <li>거실 인테리어에 고급스러운 포인트를 주고 싶은 분</li>
        <li>가족 구성에 맞는 소파 사이즈를 고민 중인 분</li>
    </ul>
`,

            spec: {
                '사이즈': '3인용 / 4인용',
                '소재': '천연면피가죽',
                '쿠션': '라텍스탑 쿠션',
                '구성': '소파 단품',
                '사용 공간': '거실',
                '디자인': '심플 · 고급',
                '착석감': '편안함',
                '특징': '가죽 마감, 안정적인 구조'
            },

            reviewList: [
                {
                    id: 1,
                    author: '송미라',
                    rating: 5,
                    date: '2024.01.12',
                    content: '가죽 촉감이 부드럽고 앉았을 때 느낌이 좋아요. 거실 분위기가 확 달라졌습니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤태준',
                    rating: 4,
                    date: '2024.01.10',
                    content: '라텍스탑 쿠션이라 오래 앉아 있어도 편안한 편이에요. 가족 모두 만족 중입니다.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.08',
                    content: '3인 소파로 선택했는데 공간 차지도 크지 않고 딱 적당해요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 5,
            title: '동서가구 프렌드 북유럽 옷장 다리형 시리즈 모음',
            price: 279000,
            salePrice: 139000,
            discount: 50,
            rating: 4.7,
            reviews: 2651,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5832/image/detail/5832_detail_051.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5832/image/detail/5832_detail_051.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5832/image/detail/5832_detail_171.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5832/image/detail/5832_detail_263.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5832/image/detail/5832_detail_38.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5832/image/detail/5832_detail_41.jpg'
            ],
            badge: 'sale',
            badgeText: '50%',
            description: `
    <h3>깔끔한 북유럽 감성의 다리형 옷장 시리즈</h3>
    <p>
        동서가구 프렌드 북유럽 옷장은 심플한 디자인과 실용적인 수납 구성을 갖춘
        다리형 옷장 시리즈입니다.
        군더더기 없는 디자인으로 공간을 답답하지 않게 연출해 주며,
        침실이나 드레스룸 어디에나 자연스럽게 어울립니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>북유럽 감성의 깔끔하고 심플한 디자인</li>
        <li>다리형 구조로 공간이 넓어 보이는 효과</li>
        <li>의류 정리에 적합한 수납 구성</li>
        <li>다양한 공간에 어울리는 실용적인 옷장</li>
        <li>바닥 청소가 편리한 다리형 디자인</li>
        <li>시리즈 구성으로 용도에 맞는 선택 가능</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>심플한 북유럽 스타일 가구를 선호하는 분</li>
        <li>공간을 답답하지 않게 연출하고 싶은 분</li>
        <li>실용적인 수납과 디자인을 동시에 원하는 분</li>
    </ul>
`,

            spec: {
                '구성': '옷장 단품',
                '형태': '다리형 옷장',
                '용도': '의류 수납',
                '설치 공간': '침실 / 드레스룸',
                '디자인': '북유럽 · 심플',
                '수납 방식': '옷걸이 및 수납 공간',
                '시리즈': '프렌드 시리즈',
                '특징': '공간 활용, 깔끔한 디자인'
            },

            reviewList: [
                {
                    id: 1,
                    author: '박지훈',
                    rating: 5,
                    date: '2024.01.11',
                    content: '디자인이 깔끔해서 방 분위기가 훨씬 정돈된 느낌이에요. 다리형이라 답답하지 않습니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '옷 수납하기 좋고 내부 공간도 무난해요. 침실용으로 잘 쓰고 있어요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '북유럽 스타일 가구 찾고 있었는데 딱 원하던 느낌이라 만족합니다.',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 6,
            title: '동서가구 에이미 거실장 1500 2000 모음',
            price: 70900,
            salePrice: 60900,
            discount: 69,
            rating: 4.7,
            reviews: 2561,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/7576/image/detail/7576_detail_042.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/7576/image/detail/7576_detail_042.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/7576/image/detail/7576_detail_188.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/7576/image/detail/7576_detail_2100.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/7576/image/detail/7576_detail_344.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/7576/image/detail/7576_detail_415.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>거실을 깔끔하게 정리해주는 실용적인 거실장</h3>
    <p>
        동서가구 에이미 거실장은 심플한 디자인과 넉넉한 수납 공간을 갖춘
        실용적인 거실 가구입니다.
        1500 / 2000 사이즈 구성으로 거실 공간에 맞게 선택할 수 있어
        TV와 다양한 생활 소품을 정리하기에 좋습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>1500 · 2000 사이즈 선택 가능</li>
        <li>TV 및 생활 소품 정리에 적합한 수납 구성</li>
        <li>군더더기 없는 심플한 디자인</li>
        <li>거실 공간에 자연스럽게 어울리는 형태</li>
        <li>안정적인 구조로 깔끔한 거실 연출</li>
        <li>다양한 인테리어 스타일과 조화</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>거실을 깔끔하게 정리하고 싶은 분</li>
        <li>공간에 맞는 거실장 사이즈를 찾는 분</li>
        <li>실용적인 TV 수납장을 원하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '1500 / 2000',
                '구성': '거실장 단품',
                '용도': 'TV 거치 및 수납',
                '설치 공간': '거실',
                '디자인': '심플 · 모던',
                '수납 형태': '수납장 구조',
                '사용 인원': '가족 공용',
                '특징': '공간 활용, 깔끔한 정리'
            },

            reviewList: [
                {
                    id: 1,
                    author: '김민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '1500 사이즈로 구매했는데 거실에 딱 맞아요. TV랑 셋톱박스 정리하기 좋습니다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 2,
                    author: '이동훈',
                    rating: 4,
                    date: '2024.01.08',
                    content: '디자인이 깔끔해서 어떤 인테리어에도 잘 어울려요. 전체적으로 만족합니다.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 7,
            title: '동서가구 쏘노 LPM 철제 시스템 드레스룸 옷장 전신거울 수납 선반장 14종 3colors',
            price: 139000,
            salePrice: 81900,
            discount: 41,
            rating: 4.8,
            reviews: 2166,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/8290/image/detail/8290_detail_025.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/8290/image/detail/8290_detail_025.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/8290/image/detail/8290_detail_166.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/8290/image/detail/8290_detail_291.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/8290/image/detail/8290_detail_356.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/8290/image/detail/8290_detail_420.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>공간 활용에 강한 철제 시스템 드레스룸 옷장</h3>
    <p>
        동서가구 쏘노 LPM 철제 시스템 드레스룸 옷장은 수납과 정리를 효율적으로 도와주는
        모듈형 드레스룸 가구입니다.
        옷장, 선반장, 전신거울 구성을 갖춰 실용적이며,
        14종 구성과 3가지 컬러로 공간과 취향에 맞게 선택할 수 있습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>철제 프레임 구조로 안정적인 사용</li>
        <li>의류, 소품 수납에 적합한 시스템 구성</li>
        <li>전신거울 포함으로 드레스룸 활용도 향상</li>
        <li>선반장 구성으로 다양한 수납 가능</li>
        <li>14종 구성으로 공간에 맞는 조합 선택</li>
        <li>3가지 컬러 옵션으로 인테리어 연출 가능</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>드레스룸이나 오픈형 수납 공간을 구성하고 싶은 분</li>
        <li>수납과 정리를 효율적으로 하고 싶은 분</li>
        <li>모듈형 시스템 가구를 찾는 분</li>
    </ul>
`,

            spec: {
                '구성': '시스템 드레스룸 옷장',
                '형태': '철제 프레임',
                '수납 방식': '옷장 / 선반 / 전신거울',
                '용도': '의류 및 소품 수납',
                '설치 공간': '드레스룸 / 침실',
                '컬러': '3 colors',
                '선택 옵션': '14종 구성',
                '특징': '모듈형 구성, 공간 활용'
            },

            reviewList: [
                {
                    id: 1,
                    author: '정우진',
                    rating: 5,
                    date: '2024.01.12',
                    content: '철제 프레임이라 안정감 있고 수납도 생각보다 많이 돼요. 드레스룸 정리하기 좋습니다.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '한미영',
                    rating: 5,
                    date: '2024.01.10',
                    content: '전신거울이 같이 있어서 아침에 옷 고를 때 편해요. 활용도가 높아요.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '강민수',
                    rating: 4,
                    date: '2024.01.08',
                    content: '모듈형이라 공간에 맞게 선택할 수 있는 점이 마음에 듭니다.',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 8,
            title: '동서가구 디아 LED편백 평상형 SS/Q 침대',
            price: 484000,
            salePrice: 275000,
            discount: 43,
            rating: 4.8,
            reviews: 2807,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6745/image/detail/6745_detail_054.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6745/image/detail/6745_detail_054.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6745/image/detail/6745_detail_198.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6745/image/detail/6745_detail_222.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6745/image/detail/6745_detail_330.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/6745/image/detail/6745_detail_457.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>편백 소재와 LED 조명이 어우러진 평상형 침대</h3>
    <p>
        동서가구 디아 LED 편백 평상형 침대는 자연스러운 편백 소재와
        은은한 LED 조명이 조화를 이루는 침대입니다.
        평상형 구조로 안정감 있게 사용할 수 있으며,
        슈퍼싱글(SS)과 퀸(Q) 사이즈 선택이 가능해 공간과 라이프스타일에 맞게 활용할 수 있습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>편백 소재 사용으로 자연스러운 분위기 연출</li>
        <li>헤드 LED 조명으로 편안한 침실 무드 제공</li>
        <li>평상형 구조로 안정감 있는 사용</li>
        <li>슈퍼싱글(SS) · 퀸(Q) 사이즈 선택 가능</li>
        <li>군더더기 없는 심플한 디자인</li>
        <li>침실을 깔끔하게 연출하기 좋은 침대</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>자연 소재 느낌의 침대를 선호하는 분</li>
        <li>LED 조명이 있는 침대를 찾는 분</li>
        <li>안정적인 평상형 침대를 원하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '슈퍼싱글(SS) / 퀸(Q)',
                '구성': '침대 프레임',
                '형태': '평상형 침대',
                '소재': '편백',
                '조명': '헤드 LED 조명',
                '설치 공간': '침실',
                '디자인': '심플 · 내추럴',
                '특징': '안정적인 구조, 은은한 조명'
            },

            reviewList: [
                {
                    id: 1,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.11',
                    content: '편백 느낌이 좋아서 침실 분위기가 한층 편안해졌어요. LED 조명도 은은해서 마음에 듭니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '평상형이라 안정감 있고 삐걱거림 없이 잘 사용 중이에요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: 'SS 사이즈로 선택했는데 공간 차지 크지 않고 깔끔해요.',
                    helpful: 156,
                    verified: true
                }
            ]
        }
    ],
    // 신상품 목록
    new: [
        {
            id: 9,
            title: '동서가구 커넥트 드레스룸 시스템 행거 단품 8종 모음 600 800 긴옷장 옷장 코너장 서랍옷장 화장대',
            price: 100000,
            salePrice: 63500,
            discount: 36,
            rating: 4.5,
            reviews: 567,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32788/image/detail/32788_detail_074.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32788/image/detail/32788_detail_074.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32788/image/detail/32788_detail_132.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32788/image/detail/32788_detail_278.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32788/image/detail/32788_detail_344.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32788/image/detail/32788_detail_454.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>공간에 맞게 구성하는 커넥트 드레스룸 시스템</h3>
    <p>
        동서가구 커넥트 드레스룸 시스템 행거는 필요한 구성만 선택해
        효율적인 수납 공간을 완성할 수 있는 시스템 가구입니다.
        600 / 800 사이즈를 비롯해 긴옷장, 옷장, 코너장, 서랍옷장, 화장대 등
        다양한 단품 구성으로 공간과 라이프스타일에 맞게 조합할 수 있습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>드레스룸 시스템 행거 단품 구성</li>
        <li>600 · 800 사이즈 선택 가능</li>
        <li>긴옷장, 옷장, 코너장, 서랍옷장, 화장대 등 다양한 구성</li>
        <li>필요한 구성만 선택해 맞춤형 배치 가능</li>
        <li>수납과 정리에 최적화된 실용적인 구조</li>
        <li>깔끔한 디자인으로 공간 활용도 향상</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>드레스룸을 직접 구성하고 싶은 분</li>
        <li>공간에 맞는 수납 조합을 찾는 분</li>
        <li>행거와 수납을 함께 활용하고 싶은 분</li>
    </ul>
`,

            spec: {
                '구성': '드레스룸 시스템 단품',
                '형태': '시스템 행거 / 옷장',
                '사이즈': '600 / 800',
                '수납 방식': '행거 · 서랍 · 선반',
                '선택 옵션': '긴옷장 / 옷장 / 코너장 / 서랍옷장 / 화장대',
                '설치 공간': '드레스룸 / 침실',
                '디자인': '심플 · 실용',
                '특징': '모듈형 구성, 공간 맞춤 수납'
            },

            reviewList: [
                {
                    id: 1,
                    author: '김민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '필요한 구성만 골라서 배치할 수 있어서 드레스룸 만들기 좋았어요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '이지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '행거랑 서랍을 같이 쓰니 옷 정리가 훨씬 편해졌습니다.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 10,
            title: '동서가구 모더나 가죽 소파 3인',
            price: 290000,
            salePrice: 193000,
            discount: 33,
            rating: 4.6,
            reviews: 9,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32765/image/detail/32765_detail_05.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32765/image/detail/32765_detail_05.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32765/image/detail/32765_detail_146.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32765/image/detail/32765_detail_276.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32765/image/detail/32765_detail_313.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32765/image/detail/32765_detail_46.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>심플한 디자인과 편안한 착석감을 갖춘 가죽 소파</h3>
    <p>
        동서가구 모더나 가죽 소파는 군더더기 없는 디자인과
        편안한 착석감을 동시에 고려한 3인용 소파입니다.
        거실 공간에 자연스럽게 어울리는 스타일로,
        일상에서 부담 없이 사용하기 좋은 실용적인 가구입니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>3인용 구성으로 가족 사용에 적합</li>
        <li>가죽 소재로 고급스러운 분위기 연출</li>
        <li>편안한 착석감으로 휴식에 적합</li>
        <li>심플하고 깔끔한 디자인</li>
        <li>거실 공간에 자연스럽게 어울리는 소파</li>
        <li>데일리 사용에 부담 없는 실용적인 구성</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>심플한 가죽 소파를 찾는 분</li>
        <li>거실용 3인 소파가 필요한 분</li>
        <li>편안함과 디자인을 함께 고려하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '3인용',
                '소재': '가죽',
                '구성': '소파 단품',
                '사용 공간': '거실',
                '디자인': '심플 · 모던',
                '착석감': '편안함',
                '사용 인원': '가족 공용',
                '특징': '가죽 마감, 안정적인 구조'
            },

            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.09',
                    content: '디자인이 심플해서 거실에 두기 좋고 가죽 촉감도 만족스러워요.',
                    helpful: 167,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 4,
                    date: '2024.01.07',
                    content: '3인이 앉기에도 충분하고 착석감이 편안한 편입니다.',
                    helpful: 123,
                    verified: true
                }
            ]
        },
        {
            id: 11,
            title: '모나크 세라믹 4인 원목 식탁세트',
            price: 1399000,
            salePrice: 818000,
            discount: 42,
            rating: 4.9,
            reviews: 1234,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32764/image/detail/32764_detail_078.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32764/image/detail/32764_detail_078.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32764/image/detail/32764_detail_125.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32764/image/detail/32764_detail_232.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32764/image/detail/32764_detail_340.jpg'
                // 'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/433473838451375-bdd03116-bb48-46a8-a928-4e22a1e4d5c6.png'
            ],
            badge: 'sale',
            badgeText: 'SALE',
            description: `
    <h3>고급스러운 세라믹 상판과 원목 프레임의 식탁세트</h3>
    <p>
        모나크 세라믹 4인 원목 식탁세트는 세라믹 상판의 내구성과
        원목 프레임의 안정감을 함께 갖춘 실용적인 다이닝 가구입니다.
        4인이 함께 사용하기에 적당한 사이즈로,
        식사부터 간단한 작업까지 다양하게 활용할 수 있습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>세라믹 상판으로 스크래치와 오염에 강함</li>
        <li>원목 프레임 사용으로 안정적인 구조</li>
        <li>4인용 구성으로 가족 사용에 적합</li>
        <li>모던하면서도 고급스러운 디자인</li>
        <li>식사와 다용도 활용이 가능한 식탁세트</li>
        <li>공간 분위기를 깔끔하게 살려주는 디자인</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>내구성 좋은 식탁을 찾는 분</li>
        <li>4인 가족용 식탁세트를 고민 중인 분</li>
        <li>세라믹 상판 식탁을 선호하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '4인용',
                '구성': '식탁 + 의자',
                '상판 소재': '세라믹',
                '프레임': '원목',
                '사용 공간': '주방 / 다이닝룸',
                '디자인': '모던 · 고급',
                '사용 인원': '4인',
                '특징': '내구성, 안정적인 구조'
            },

            reviewList: [
                {
                    id: 1,
                    author: '김태현',
                    rating: 5,
                    date: '2024.01.13',
                    content: '세라믹 상판이라 관리하기 편하고 음식 올려두기 좋아요.',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '이서연',
                    rating: 5,
                    date: '2024.01.11',
                    content: '원목 프레임이라 흔들림 없이 안정감 있습니다.',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '박준영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '4인 가족이 사용하기에 크기나 높이가 적당해요.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '최미라',
                    rating: 4,
                    date: '2024.01.07',
                    content: '디자인이 깔끔해서 주방 분위기가 한층 좋아졌어요.',
                    helpful: 234,
                    verified: true
                }
            ]
        },
        {
            id: 12,
            title: '동서가구 플로우 2단 서랍장 DF927888',
            price: 66000,
            salePrice: 33000,
            discount: 25,
            rating: 4.7,
            reviews: 456,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32760/image/detail/32760_detail_072.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32760/image/detail/32760_detail_072.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32760/image/detail/32760_detail_165.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32760/image/detail/32760_detail_266.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32760/image/detail/32760_detail_322.jpg'
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2026/02/03/S6295412/_5_600.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
    <h3>깔끔한 디자인으로 공간 활용이 좋은 2단 서랍장</h3>
    <p>
        동서가구 플로우 2단 서랍장은 군더더기 없는 디자인과
        실용적인 수납 구성을 갖춘 컴팩트한 서랍장입니다.
        침실이나 거실, 드레스룸 등 다양한 공간에서
        보조 수납 가구로 활용하기 좋습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>2단 서랍 구성으로 간편한 수납 가능</li>
        <li>자주 사용하는 소품 정리에 적합</li>
        <li>심플하고 깔끔한 디자인</li>
        <li>공간 부담이 적은 컴팩트한 사이즈</li>
        <li>다양한 공간에 활용 가능한 서랍장</li>
        <li>데일리 사용에 적합한 실용적인 가구</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>보조 수납용 서랍장을 찾는 분</li>
        <li>공간을 깔끔하게 정리하고 싶은 분</li>
        <li>심플한 디자인의 수납 가구를 선호하는 분</li>
    </ul>
`,

            spec: {
                '구성': '2단 서랍장',
                '단수': '2단',
                '용도': '소품 및 생활용품 수납',
                '설치 공간': '침실 / 거실 / 드레스룸',
                '디자인': '심플 · 모던',
                '수납 방식': '서랍형',
                '사용 인원': '가족 공용',
                '특징': '컴팩트한 사이즈, 깔끔한 정리'
            },

            reviewList: [
                {
                    id: 1,
                    author: '장민호',
                    rating: 5,
                    date: '2024.01.12',
                    content: '크기가 부담스럽지 않아서 침대 옆에 두기 좋아요.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤지혜',
                    rating: 5,
                    date: '2024.01.10',
                    content: '자주 쓰는 물건 정리하기에 딱 적당한 서랍장입니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 3,
                    author: '이동욱',
                    rating: 4,
                    date: '2024.01.08',
                    content: '디자인이 깔끔해서 어디에 두어도 잘 어울려요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 18,
            title: '동서가구 샤이니 600/800 5단 7칸 깊은 서랍장 2종 모음',
            price: 200000,
            salePrice: 139000,
            discount: 30,
            rating: 4.6,
            reviews: 5,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32755/image/detail/32755_detail_015.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32755/image/detail/32755_detail_015.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32755/image/detail/32755_detail_150.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32755/image/detail/32755_detail_274.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32755/image/detail/32755_detail_369.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32755/image/detail/32755_detail_463.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>넉넉한 수납력을 갖춘 깊은 서랍장</h3>
    <p>
        동서가구 샤이니 5단 서랍장은 깊은 서랍 구조로
        의류와 생활용품을 효율적으로 정리할 수 있는 수납 가구입니다.
        600 / 800 사이즈와 7칸 구성으로 공간과 수납량에 맞게 선택할 수 있어
        침실이나 드레스룸에서 활용하기 좋습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>5단 구성으로 넉넉한 수납 가능</li>
        <li>깊은 서랍 구조로 수납 효율 향상</li>
        <li>600 · 800 사이즈 선택 가능</li>
        <li>7칸 구성으로 다양한 수납 활용</li>
        <li>심플하고 깔끔한 디자인</li>
        <li>침실과 드레스룸에 잘 어울리는 서랍장</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>수납력이 좋은 서랍장을 찾는 분</li>
        <li>의류와 생활용품을 함께 정리하고 싶은 분</li>
        <li>공간에 맞는 서랍장 사이즈를 고민 중인 분</li>
    </ul>
`,

            spec: {
                '사이즈': '600 / 800',
                '단수': '5단',
                '칸수': '7칸',
                '구성': '서랍장 단품',
                '용도': '의류 및 생활용품 수납',
                '설치 공간': '침실 / 드레스룸',
                '디자인': '심플 · 모던',
                '특징': '깊은 서랍, 넉넉한 수납'
            },

            reviewList: [
                {
                    id: 1,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.11',
                    content: '서랍이 깊어서 옷이 많이 들어가요. 수납력은 정말 만족합니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영수',
                    rating: 4,
                    date: '2024.01.09',
                    content: '800 사이즈로 선택했는데 드레스룸 정리가 훨씬 수월해졌어요.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 3,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.07',
                    content: '칸 구성이 잘 되어 있어서 종류별로 정리하기 좋습니다.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 19,
            title: '동서가구 블록 서랍장 4종 모음 800 1200 와이드 광폭 선택 3단 4단 5단',
            price: 120000,
            salePrice: 69000,
            discount: 42,
            rating: 4.6,
            reviews: 17,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32753/image/detail/32753_detail_048.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32753/image/detail/32753_detail_048.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32753/image/detail/32753_detail_199.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32753/image/detail/32753_detail_249.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32753/image/detail/32753_detail_340.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32753/image/detail/32753_detail_419.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
    <h3>넓은 수납 공간으로 정리가 쉬운 와이드 서랍장</h3>
    <p>
        동서가구 블록 서랍장은 와이드한 구조로 넉넉한 수납이 가능한
        실용적인 서랍장 시리즈입니다.
        800 / 1200 광폭 사이즈와 3단 · 4단 · 5단 구성으로
        공간과 수납량에 맞게 선택할 수 있어 침실이나 드레스룸에 활용하기 좋습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>800 · 1200 와이드 사이즈 선택 가능</li>
        <li>3단 · 4단 · 5단 구성으로 수납량에 맞는 선택</li>
        <li>광폭 서랍 구조로 넉넉한 수납 공간 제공</li>
        <li>의류와 생활용품 정리에 적합한 서랍장</li>
        <li>심플하고 안정감 있는 디자인</li>
        <li>침실 및 드레스룸에 잘 어울리는 수납 가구</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>넉넉한 수납이 가능한 서랍장을 찾는 분</li>
        <li>와이드한 서랍장으로 정리를 깔끔하게 하고 싶은 분</li>
        <li>공간에 맞는 단수와 사이즈를 선택하고 싶은 분</li>
    </ul>
`,

            spec: {
                '사이즈': '800 / 1200',
                '단수': '3단 / 4단 / 5단',
                '구성': '서랍장 단품',
                '용도': '의류 및 생활용품 수납',
                '설치 공간': '침실 / 드레스룸',
                '디자인': '심플 · 모던',
                '수납 방식': '와이드 서랍형',
                '특징': '광폭 구조, 넉넉한 수납'
            },

            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '1200 사이즈라 수납공간이 정말 넉넉해요. 옷 정리하기 훨씬 편해졌습니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '정태영',
                    rating: 4,
                    date: '2024.01.08',
                    content: '서랍이 넓어서 큰 옷이나 이불도 넣기 좋아요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.06',
                    content: '디자인이 심플해서 방이 깔끔해 보입니다.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.04',
                    content: '4단으로 선택했는데 수납량과 높이가 적당해요.',
                    helpful: 134,
                    verified: true
                }
            ]
        }
    ],
    // 특가 상품 목록
    sale: [
        {
            id: 13,
            title: '동서가구 엘스 모던 흙침대 SS/Q',
            price: 904000,
            salePrice: 413000,
            discount: 54,
            rating: 4.7,
            reviews: 2345,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5446/image/detail/5446_detail_054.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5446/image/detail/5446_detail_054.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5446/image/detail/5446_detail_114.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5446/image/detail/5446_detail_256.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5446/image/detail/5446_detail_355.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/5446/image/detail/5446_detail_482.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
    <h3>자연 소재의 편안함을 담은 모던한 흙침대</h3>
    <p>
        동서가구 엘스 모던 흙침대는 흙 소재의 안정감과
        깔끔한 디자인을 함께 담은 침대입니다.
        슈퍼싱글(SS)과 퀸(Q) 사이즈 선택이 가능해
        공간과 사용 인원에 맞게 활용할 수 있으며,
        침실을 차분하고 편안한 분위기로 연출해 줍니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>흙 소재 사용으로 안정적인 사용감</li>
        <li>모던하고 깔끔한 디자인</li>
        <li>슈퍼싱글(SS) · 퀸(Q) 사이즈 선택 가능</li>
        <li>침실에 잘 어울리는 차분한 분위기 연출</li>
        <li>평상형 구조로 안정감 있는 사용</li>
        <li>데일리 사용에 적합한 실용적인 침대</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>자연 소재 침대를 선호하는 분</li>
        <li>차분한 침실 분위기를 원하시는 분</li>
        <li>SS 또는 Q 사이즈 침대를 찾는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '슈퍼싱글(SS) / 퀸(Q)',
                '구성': '흙침대 프레임',
                '형태': '흙침대',
                '소재': '흙',
                '설치 공간': '침실',
                '디자인': '모던 · 심플',
                '사용 인원': '1~2인',
                '특징': '안정적인 구조, 자연 소재'
            },

            reviewList: [
                {
                    id: 1,
                    author: '홍길동',
                    rating: 5,
                    date: '2024.01.14',
                    content: '흙침대라 그런지 누웠을 때 안정감 있는 느낌이 들어요.',
                    helpful: 567,
                    verified: true
                },
                {
                    id: 2,
                    author: '김영희',
                    rating: 5,
                    date: '2024.01.12',
                    content: '디자인이 과하지 않고 깔끔해서 침실 분위기가 차분해졌어요.',
                    helpful: 489,
                    verified: true
                },
                {
                    id: 3,
                    author: '이철수',
                    rating: 4,
                    date: '2024.01.10',
                    content: 'SS 사이즈로 사용 중인데 혼자 쓰기 딱 적당합니다.',
                    helpful: 345,
                    verified: true
                }
            ]
        },
        {
            id: 14,
            title: '동서가구 뉴테라 천연면피가죽 소파 스툴미포함 라이트그레이, 4인용',
            price: 820000,
            salePrice: 677900,
            discount: 17,
            rating: 4.8,
            reviews: 789,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32526/image/detail/28533_detail_056.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32526/image/detail/28533_detail_056.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32526/image/detail/5336_detail_153.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32526/image/detail/5336_detail_254.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32526/image/detail/5336_detail_395.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/32526/image/detail/5336_detail_485.jpgg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
    <h3>고급스러운 천연면피가죽의 편안한 4인용 소파</h3>
    <p>
        동서가구 뉴테라 천연면피가죽 소파는 부드러운 촉감의 가죽 소재와
        안정적인 착석감을 갖춘 4인용 소파입니다.
        라이트그레이 컬러로 거실을 밝고 세련된 분위기로 연출해 주며,
        스툴 미포함 구성으로 깔끔한 공간 활용이 가능합니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>천연면피가죽 사용으로 고급스러운 촉감</li>
        <li>4인용 구성으로 가족 사용에 적합</li>
        <li>라이트그레이 컬러로 밝고 세련된 거실 연출</li>
        <li>편안한 착석감으로 휴식에 적합</li>
        <li>스툴 미포함 구성으로 공간 활용도 높음</li>
        <li>심플하고 모던한 디자인</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>고급스러운 가죽 소파를 찾는 분</li>
        <li>넉넉한 4인용 소파가 필요한 분</li>
        <li>밝은 컬러의 거실 가구를 선호하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '4인용',
                '소재': '천연면피가죽',
                '컬러': '라이트그레이',
                '구성': '소파 단품 (스툴 미포함)',
                '사용 공간': '거실',
                '디자인': '모던 · 심플',
                '착석감': '편안함',
                '특징': '가죽 마감, 안정적인 구조'
            },

            reviewList: [
                {
                    id: 1,
                    author: '최민수',
                    rating: 5,
                    date: '2024.01.13',
                    content: '가죽 촉감이 부드럽고 라이트그레이 색상이 거실을 환하게 만들어줘요.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '박지영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '4명이 앉아도 여유 있고 착석감도 편안한 편입니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '이준호',
                    rating: 4,
                    date: '2024.01.09',
                    content: '디자인이 깔끔해서 인테리어랑 잘 어울려요.',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 15,
            title: '동서가구 리온 800 좌식 거울 화장대 DF918528',
            price: 66000,
            salePrice: 40900,
            discount: 38,
            rating: 4.6,
            reviews: 345,
            image: 'https://cdn-pro-web-209-40.cdn-nhncommerce.com/edftr76860385_godomall_com/data/goods/22/05/18//13274/register_detail_013.jpg',
            images: [
                'https://cdn-pro-web-209-40.cdn-nhncommerce.com/edftr76860385_godomall_com/data/goods/22/05/18//13274/register_detail_013.jpg'
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_1_600.jpg',
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_2_600.jpg',
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_3_600.jpg',
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/11/10/B0639096/B0639096_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '38%',
            description: `
    <h3>공간 부담 없이 사용하기 좋은 좌식 화장대</h3>
    <p>
        동서가구 리온 800 좌식 거울 화장대는 컴팩트한 사이즈와
        실용적인 수납 구성을 갖춘 좌식 타입 화장대입니다.
        바닥에 앉아 사용하는 구조로 공간 활용도가 높아
        침실이나 원룸에서도 부담 없이 사용할 수 있습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>좌식 타입으로 공간 활용에 유리</li>
        <li>800 사이즈로 부담 없는 컴팩트한 크기</li>
        <li>거울 포함 구성으로 실용성 강화</li>
        <li>화장품과 소품 정리에 적합한 수납 공간</li>
        <li>심플하고 깔끔한 디자인</li>
        <li>침실 및 개인 공간에 잘 어울리는 화장대</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>좌식 화장대를 선호하는 분</li>
        <li>공간이 넓지 않은 방에서 사용할 화장대를 찾는 분</li>
        <li>깔끔한 디자인의 화장대를 원하는 분</li>
    </ul>
`,

            spec: {
                '사이즈': '800',
                '구성': '좌식 화장대 + 거울',
                '형태': '좌식 타입',
                '용도': '화장 및 소품 수납',
                '설치 공간': '침실 / 원룸',
                '디자인': '심플 · 모던',
                '수납 방식': '서랍 및 수납 공간',
                '특징': '컴팩트한 사이즈, 공간 활용'
            },

            reviewList: [
                {
                    id: 1,
                    author: '김태수',
                    rating: 5,
                    date: '2024.01.12',
                    content: '좌식이라 방이 좁아도 부담 없이 쓸 수 있어서 좋아요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이미라',
                    rating: 4,
                    date: '2024.01.10',
                    content: '거울이 같이 있어서 따로 준비할 필요 없어서 편합니다.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 16,
            title: '동서가구 리사 천연 삼나무 770 5단 원목 서랍장',
            price: 369000,
            salePrice: 167000,
            discount: 55,
            rating: 4.8,
            reviews: 1234,
            image: 'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/18647/image/detail/18647_detail_020.jpg',
            images: [
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/18647/image/detail/18647_detail_020.jpg',
                'https://godomall.speedycdn.net/03dfe2ed0e288d77b31042956826a098/goods/18647/image/detail/18647_detail_137.jpg'
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_2_600.jpg',
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_3_600.jpg',
                // 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2023/12/28/B0351146/B0351146_4_600.jpg'
            ],
            badge: 'sale',
            badgeText: '55%',
            description: `
    <h3>자연스러운 원목 감성이 돋보이는 5단 서랍장</h3>
    <p>
        동서가구 리사 천연 삼나무 서랍장은 원목 특유의 따뜻한 분위기와
        실용적인 수납 구성을 갖춘 수납 가구입니다.
        770 사이즈의 5단 구조로 의류와 생활용품을 깔끔하게 정리할 수 있어
        침실이나 드레스룸에서 활용하기 좋습니다.
    </p>

    <h4>주요 특징</h4>
    <ul>
        <li>천연 삼나무 원목 사용으로 자연스러운 질감</li>
        <li>5단 구성으로 넉넉한 수납 가능</li>
        <li>770 사이즈로 공간 활용에 적합</li>
        <li>의류 및 생활용품 정리에 용이한 서랍 구조</li>
        <li>원목 특유의 따뜻한 분위기 연출</li>
        <li>침실과 드레스룸에 잘 어울리는 디자인</li>
    </ul>

    <h4>이런 분께 추천해요</h4>
    <ul>
        <li>원목 가구를 선호하는 분</li>
        <li>자연스러운 분위기의 서랍장을 찾는 분</li>
        <li>수납력 좋은 5단 서랍장이 필요한 분</li>
    </ul>
`,

            spec: {
                '사이즈': '770',
                '단수': '5단',
                '소재': '천연 삼나무 원목',
                '구성': '서랍장 단품',
                '용도': '의류 및 생활용품 수납',
                '설치 공간': '침실 / 드레스룸',
                '디자인': '내추럴 · 심플',
                '특징': '원목 질감, 넉넉한 수납'
            },

            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.13',
                    content: '원목 느낌이 살아 있어서 방 분위기가 따뜻해졌어요.',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 5,
                    date: '2024.01.11',
                    content: '5단이라 수납력이 좋아서 옷 정리하기 편합니다.',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '이미영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '서랍 여닫을 때도 무난하고 전체적으로 안정감 있어요.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '최태현',
                    rating: 4,
                    date: '2024.01.07',
                    content: '디자인이 과하지 않아서 오래 써도 질리지 않을 것 같아요.',
                    helpful: 234,
                    verified: true
                }
            ]
        }
    ]
};

// ============================================
// 상품 데이터 조회 함수
// ============================================

// 모든 상품을 가져오는 함수
function getAllProducts() {
    return [...productsData.best, ...productsData.new, ...productsData.sale];
}

// 상품 ID로 특정 상품을 찾는 함수
function findProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// 전역에서 접근 가능하도록 window 객체에 노출
window.productsData = productsData;
window.findProductById = findProductById;
window.getAllProducts = getAllProducts;
