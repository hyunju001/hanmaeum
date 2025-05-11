import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-emerald-600 text-white py-6 px-8 shadow-md">
        <h1 className="text-3xl font-bold">한마음심리상담연구원</h1>
        <p className="text-lg mt-2">김복순 박사와 함께하는 마음의 치유와 성장</p>
      </header>

      <main className="p-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">연구원 소개</h2>
          <p>
            한마음심리상담연구원은 심리적 어려움을 겪는 분들에게 전문적인 상담 서비스를 제공하며,
            따뜻하고 신뢰할 수 있는 공간을 추구합니다. 김복순 박사님의 풍부한 경험과 전문성을 바탕으로,
            내담자 중심의 상담을 실천합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">안내</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>개설 강좌: 현재 진행 중인 강좌 목록과 상세 정보</li>
            <li>한마음: 기관의 철학과 비전 소개</li>
            <li>원장 소개: 김복순 박사님의 약력 및 인사말</li>
            <li>오시는 길: 지도 및 교통편 안내</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">스케줄</h2>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">상담 안내</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>상담 절차 및 비용 안내</li>
            <li>문의 시 아래 연락처로 연락 바랍니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">자료실</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>강의 자료, 연구 논문 등 아카이브 제공</li>
            <li>제 9차 한마음 놀이·모래 관련 자료</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">상담 문의</h2>
          <p className="mb-2">문의는 아래 이메일 또는 전화번호로 연락 주세요.</p>
          <p>📧 이메일: contact@hanmaeum.co.kr</p>
          <p>📞 전화: 010-1234-5678</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">오시는 길</h2>
          <iframe
            title="오시는 길"
            className="w-full h-64 border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.889585405138!2d127.04693281567884!3d37.498929979806095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca18ff07e9f6d%3A0x6112b33aa6a578e2!2z6rK96riw64-EIOuzuOyEvOyEnCDqtazslYTsubTrjbDrr7jshLzsm5A!5e0!3m2!1sko!2skr!4v1589263723864!5m2!1sko!2skr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-4 mt-12 text-sm text-gray-600">
        © 2025 한마음심리상담연구원. All rights reserved.
      </footer>
    </div>
  );
}