export default function Footer() {
  return (
    <footer className="bg-white px-20 py-10">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold">iPhone</h2>
          <p className="mt-3 text-sm text-gray-500">
            Jelajahi semua produk iPhone.
          </p>
        </div>

        <div className="flex gap-20">
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
        © 2026 iPhone Project
      </div>
    </footer>
  );
}
