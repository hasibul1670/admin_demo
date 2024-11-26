import { MdAccountBalance, MdArrowUpward, MdAttachMoney, MdContacts, MdDashboard, MdFileCopy, MdInsertChart, MdOutlineAttachMoney, MdOutlineInventory, MdShoppingCart, MdStorefront } from "react-icons/md";

 const menuItems = [
   {
     id: 1,
     icon: MdDashboard,
     text: "Dashboard",
     link: "/dashboard",
   },
   {
     id: 2,
     icon: MdStorefront,
     text: "Suppliers",
     link: "/suppliers",
     subMenu: [
       {
         id: 1,
         icon: "MdList",
         text: "Suppliers List",
         link: "/suppliers/list",
       },
       {
         id: 2,
         icon: "MdPersonAdd",
         text: "Add Supplier",
         link: "/suppliers/add",
       },
       {
         id: 3,
         icon: "MdAttachMoney",
         text: "Due Received List",
         link: "/suppliers/due-received",
       },
       {
         id: 4,
         icon: "MdReceipt",
         text: "Supplier Transactions",
         link: "/suppliers/transactions",
       },
       {
         id: 5,
         icon: "MdHistory",
         text: "Purchase History",
         link: "/suppliers/purchase-history",
       },
     ],
   },
   {
     id: 3,
     icon: MdContacts,
     text: "Customers",
     link: "/customers",
     subMenu: [
       {
         id: 1,
         icon: "MdGroup",
         text: "Customers List",
         link: "/customers/list",
       },
       {
         id: 2,
         icon: "MdPersonAdd",
         text: "Add Customer",
         link: "/customers/add",
       },
       {
         id: 3,
         icon: "MdReceipt",
         text: "Customer Transactions",
         link: "/customers/transactions",
       },
       {
         id: 4,
         icon: "MdMoney",
         text: "Receivables",
         link: "/customers/receivables",
       },
       {
         id: 5,
         icon: "MdHistory",
         text: "Payment History",
         link: "/customers/payment-history",
       },
     ],
   },
   {
     id: 4,
     icon: MdShoppingCart,
     text: "Products",
     link: "/products",
     subMenu: [
       {
         id: 1,
         icon: "MdList",
         text: "Products List",
         link: "/products/list",
       },
       { id: 2, icon: "MdAdd", text: "Add Product", link: "/products/add" },
       {
         id: 3,
         icon: "MdCategory",
         text: "Categories",
         link: "/products/categories",
       },
       {
         id: 4,
         icon: "MdStackedLineChart",
         text: "Stock Levels",
         link: "/products/stock-levels",
       },
       {
         id: 5,
         icon: "MdAttachMoney",
         text: "Product Pricing",
         link: "/products/pricing",
       },
     ],
   },
   {
     id: 5,
     icon: MdFileCopy,
     text: "Purchases",
     link: "/purchases",
     subMenu: [
       {
         id: 1,
         icon: "MdFileText",
         text: "Purchase Orders",
         link: "/purchases/orders",
       },
       {
         id: 2,
         icon: "MdAdd",
         text: "Add Purchase Order",
         link: "/purchases/add-order",
       },
       {
         id: 3,
         icon: "MdReceipt",
         text: "Vendor Bills",
         link: "/purchases/vendor-bills",
       },
       {
         id: 4,
         icon: "MdAccessTime",
         text: "Pending Purchases",
         link: "/purchases/pending",
       },
       {
         id: 5,
         icon: "MdReplay",
         text: "Purchase Returns",
         link: "/purchases/returns",
       },
     ],
   },
   {
     id: 6,
     icon: MdOutlineInventory,
     text: "Inventory",
     link: "/inventory",
     subMenu: [
       {
         id: 1,
         icon: "MdBarChart",
         text: "Inventory Overview",
         link: "/inventory/overview",
       },
       {
         id: 2,
         icon: "MdArrowDownward",
         text: "Stock In",
         link: "/inventory/stock-in",
       },
       {
         id: 3,
         icon: MdArrowUpward,
         text: "Stock Out",
         link: "/inventory/stock-out",
       },
       {
         id: 4,
         icon: "MdEdit",
         text: "Stock Adjustments",
         link: "/inventory/adjustments",
       },
       {
         id: 5,
         icon: "MdWarehouse",
         text: "Warehouse Management",
         link: "/inventory/warehouse",
       },
     ],
   },
   {
     id: 7,
     icon: MdAttachMoney,
     text: "Sales",
     link: "/sales",
     subMenu: [
       { id: 1, icon: "MdList", text: "Sales Orders", link: "/sales/orders" },
       {
         id: 2,
         icon: "MdAdd",
         text: "Add Sales Order",
         link: "/sales/add-order",
       },
       { id: 3, icon: "MdReceipt", text: "Invoices", link: "/sales/invoices" },
       {
         id: 4,
         icon: "MdAccessTime",
         text: "Pending Payments",
         link: "/sales/pending-payments",
       },
       {
         id: 5,
         icon: "MdReplay",
         text: "Sales Returns",
         link: "/sales/returns",
       },
     ],
   },
   {
  "id": 10,
  "icon": MdOutlineAttachMoney,
  "text": "Expenses",
  "link": "/expenses",
  "subMenu": [
    { "id": 1, "icon": "MdList", "text": "Expense List", "link": "/expenses/list" },
    { "id": 2, "icon": "MdAdd", "text": "Add Expense", "link": "/expenses/add" },
    { "id": 3, "icon": "MdCategory", "text": "Categories", "link": "/expenses/categories" },
    { "id": 4, "icon": "MdRepeat", "text": "Recurring Expenses", "link": "/expenses/recurring" }
  ]
}
,
   {
     id: 8,
     icon: MdAccountBalance,
     text: "Accounts",
     link: "/accounts",
     subMenu: [
       {
         id: 1,
         icon: "MdBook",
         text: "Chart of Accounts",
         link: "/accounts/chart",
       },
       {
         id: 2,
         icon: "MdLibraryBooks",
         text: "General Ledger",
         link: "/accounts/ledger",
       },
       {
         id: 3,
         icon: "MdBalance",
         text: "Trial Balance",
         link: "/accounts/trial-balance",
       },
       {
         id: 4,
         icon: "MdEdit",
         text: "Journal Entries",
         link: "/accounts/journal-entries",
       },
       {
         id: 5,
         icon: "MdAccountBalanceWallet",
         text: "Cash Flow",
         link: "/accounts/cash-flow",
       },
       {
         id: 6,
         icon: "MdCreditCard",
         text: "Bank Reconciliation",
         link: "/accounts/bank-reconciliation",
       },
     ],
   },
   {
     id: 9,
     icon: MdInsertChart,
     text: "Reports",
     link: "/reports",
     subMenu: [
       {
         id: 1,
         icon: "MdInsertDriveFile",
         text: "Income Statement",
         link: "/reports/income-statement",
       },
       {
         id: 2,
         icon: "MdInsertDriveFile",
         text: "Balance Sheet",
         link: "/reports/balance-sheet",
       },
       {
         id: 3,
         icon: "MdInsertDriveFile",
         text: "Cash Flow Statement",
         link: "/reports/cash-flow-statement",
       },
       {
         id: 4,
         icon: "MdAssessment",
         text: "Tax Reports",
         link: "/reports/tax",
       },
       {
         id: 5,
         icon: "MdShoppingCart",
         text: "Sales Reports",
         link: "/reports/sales",
       },
       {
         id: 6,
         icon: "MdShoppingCart",
         text: "Purchase Reports",
         link: "/reports/purchase",
       },
       {
         id: 7,
         icon: "MdTrello",
         text: "Inventory Reports",
         link: "/reports/inventory",
       },
       {
         id: 8,
         icon: "MdGroup",
         text: "Employee Reports",
         link: "/reports/employees",
       },
     ],
   },
 ]; 
export default menuItems

