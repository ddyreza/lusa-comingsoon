export function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 dark:text-gray-300 py-6 bg-white dark:bg-navy-900">
      © {new Date().getFullYear()}{" "}
      <span className="text-primary-pink font-medium">Lusa.digital</span>.
    </footer>
  );
}
