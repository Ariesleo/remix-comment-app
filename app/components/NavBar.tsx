import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Comment-App
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link
            href="/navbars"
            active={true}
            >
            Add Comments
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            About
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Services
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavBar