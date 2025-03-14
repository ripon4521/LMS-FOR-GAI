import Link from "next/link"
import { BookOpen, Clock, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarNav } from "@/components/sidebar-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StudentDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <header className="bg-background border-b px-4 py-3 ">
        <div className="flex items-start">
          <SidebarNav />
         
          <main className="flex-1 p-4 md:p-6 overflow-auto">
       <div className="flex justify-between items-center my-2">
       <h1 className="text-xl font-bold ml-4">Student Dashboard</h1>
       <p className="flex flex-col">Rk Ripon Khan <span>GAI-652771</span></p>

       </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Books Borrowed</CardTitle>
              <CardDescription>Current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold">5</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Books Due Soon</CardTitle>
              <CardDescription>Within 3 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-amber-500 mr-3" />
                <span className="text-3xl font-bold">2</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Books Returned</CardTitle>
              <CardDescription>This semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <RotateCcw className="h-8 w-8 text-green-500 mr-3" />
                <span className="text-3xl font-bold">10</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your library activities</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1">
              <Link href="/student/borrow">
                <BookOpen className="mr-2 h-4 w-4" />
                Borrow Books
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/student/return">
                <RotateCcw className="mr-2 h-4 w-4" />
                Return Books
              </Link>
            </Button>
            <Button asChild variant="secondary" className="flex-1">
              <Link href="/">Go to LMS Home</Link>
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="borrowed" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="borrowed">Borrowed Books</TabsTrigger>
            <TabsTrigger value="history">Borrowing History</TabsTrigger>
          </TabsList>
          <TabsContent value="borrowed">
            <Card>
              <CardHeader>
                <CardTitle>Currently Borrowed Books</CardTitle>
                <CardDescription>Books you need to return</CardDescription>
              </CardHeader>
              <CardContent className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Book ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden md:table-cell">Issue Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BK-1245",
                        title: "Graphic Design Principles",
                        issueDate: "10/03/2025",
                        dueDate: "24/03/2025",
                      },
                      {
                        id: "BK-3456",
                        title: "Color Theory in Practice",
                        issueDate: "15/03/2025",
                        dueDate: "29/03/2025",
                      },
                      {
                        id: "BK-7890",
                        title: "Digital Illustration Techniques",
                        issueDate: "05/03/2025",
                        dueDate: "19/03/2025",
                      },
                      {
                        id: "BK-5432",
                        title: "Print Production Essentials",
                        issueDate: "01/03/2025",
                        dueDate: "15/03/2025",
                      },
                      {
                        id: "BK-0987",
                        title: "Typography Fundamentals",
                        issueDate: "20/02/2025",
                        dueDate: "06/03/2025",
                      },
                    ].map((book, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{book.id}</TableCell>
                        <TableCell>{book.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{book.issueDate}</TableCell>
                        <TableCell className={book.dueDate === "06/03/2025" ? "text-red-500 font-medium" : ""}>
                          {book.dueDate}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              book.dueDate === "06/03/2025" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                            }`}
                          >
                            {book.dueDate === "06/03/2025" ? "Overdue" : "On Time"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Borrowing History</CardTitle>
                <CardDescription>All books you've borrowed this semester</CardDescription>
              </CardHeader>
              <CardContent className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Book ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden md:table-cell">Issue Date</TableHead>
                      <TableHead className="hidden md:table-cell">Return Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BK-1245",
                        title: "Graphic Design Principles",
                        issueDate: "10/03/2025",
                        returnDate: "-",
                        status: "Borrowed",
                      },
                      {
                        id: "BK-3456",
                        title: "Color Theory in Practice",
                        issueDate: "15/03/2025",
                        returnDate: "-",
                        status: "Borrowed",
                      },
                      {
                        id: "BK-7890",
                        title: "Digital Illustration Techniques",
                        issueDate: "05/03/2025",
                        returnDate: "-",
                        status: "Borrowed",
                      },
                      {
                        id: "BK-5432",
                        title: "Print Production Essentials",
                        issueDate: "01/03/2025",
                        returnDate: "-",
                        status: "Borrowed",
                      },
                      {
                        id: "BK-0987",
                        title: "Typography Fundamentals",
                        issueDate: "20/02/2025",
                        returnDate: "-",
                        status: "Borrowed",
                      },
                      {
                        id: "BK-2468",
                        title: "Branding Strategies",
                        issueDate: "10/02/2025",
                        returnDate: "24/02/2025",
                        status: "Returned",
                      },
                      {
                        id: "BK-1357",
                        title: "UI/UX Design Fundamentals",
                        issueDate: "05/02/2025",
                        returnDate: "19/02/2025",
                        status: "Returned",
                      },
                      {
                        id: "BK-8642",
                        title: "Photography Basics",
                        issueDate: "01/02/2025",
                        returnDate: "15/02/2025",
                        status: "Returned",
                      },
                      {
                        id: "BK-9753",
                        title: "Advertising Design",
                        issueDate: "25/01/2025",
                        returnDate: "08/02/2025",
                        status: "Returned",
                      },
                      {
                        id: "BK-3141",
                        title: "Web Design Principles",
                        issueDate: "15/01/2025",
                        returnDate: "29/01/2025",
                        status: "Returned",
                      },
                    ].map((book, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{book.id}</TableCell>
                        <TableCell>{book.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{book.issueDate}</TableCell>
                        <TableCell className="hidden md:table-cell">{book.returnDate}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              book.status === "Borrowed" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                            }`}
                          >
                            {book.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
        </div>
       
      </header>
     
    </div>
  )
}

