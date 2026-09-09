export default function Footer() {
  return (
    <footer className="bg-gray-100 px-6 py-10 md:px-20">
      {/* 
        - flex-col: Di HP susunan ke bawah (vertikal)
        - md:flex-row: Masuk layar medium, berubah jadi menyamping (horizontal)
        - gap-8 md:gap-0: Beri jarak antar elemen saat vertikal, hilangkan gap kalau sudah menyamping
      */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div>
          <h2 className="font-semibold">Apple</h2>
          <p className="mt-3 text-sm text-gray-500">
            Jelajahi semua produk Apple.
          </p>
        </div>

        {/* 
          Bagian menu kanan:
          - flex-col sm:flex-row: Di HP kecil menu produk & bantuan turun ke bawah, pas layar sm kesamping lagi
          - gap-8 sm:gap-20: Mengatur jarak antar kolom produk dan bantuan
        */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
          <div>
            <h3 className="font-semibold">Produk</h3>
            <p className="mt-3 text-sm text-gray-500">iPhone</p>
            <p className="text-sm text-gray-500">iPad</p>
            <p className="text-sm text-gray-500">Mac</p>
          </div>

          <div>
            <h3 className="font-semibold">Bantuan</h3>
            <p className="mt-3 text-sm text-gray-500">Support</p>
            <p className="text-sm text-gray-500">Hubungi Kami</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-5 text-sm text-gray-500">
        © 2026 Apple Project
      </div>
    </footer>
  );
}
