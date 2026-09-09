export default function Footer() {
  return (
    <footer className="bg-gray-100 px-6 py-10 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div>
          <h2 className="font-semibold">Apple</h2>
          <p className="mt-3 text-sm text-gray-500">
            Jelajahi semua produk Apple.
          </p>
        </div>

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
