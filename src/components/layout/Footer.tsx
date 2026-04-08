export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-black px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-[10px] text-gray-700">
          © {new Date().getFullYear()} Open Hands Global Kft.
        </span>
        <a
          href="https://staffing.openhands.hu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-gray-700 transition-colors hover:text-gray-400"
        >
          workforce & recruitment →
        </a>
      </div>
    </footer>
  )
}
