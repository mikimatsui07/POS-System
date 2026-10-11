const features =
[
  {
    number: "01",
    title: "Inventory Management",
    description: "Organize products, monitor quantities, and spot low-stock items before they run out.",
    icon: "▦",
  },
  
  {
    number:"02",
    title: "Point of Sale",
    description: "Keep checkout organizedKeep checkout organized with a clear sales workflow and an easy-to-read cart.",
    icon: "↗",
  },
  
  {
    number:"02",
    title: "Point of Sale",
    description: "Keep checkout organizedKeep checkout organized with a clear sales workflow and an easy-to-read cart.",
    icon: "↗",
  },
]

export default function Home()
{
  return (
    <main>
      <header>
        <h1>StockPoint</h1>
        <p>Point of Sale & Inventory Management</p>
      </header>

      <section>
        <h2>Welcome to Stockpoint</h2>
        <p>Manage your products,track inventory, and monitor your sales in one place.</p>
        <button>Get Started</button>
      </section>
    </main>
  )
}