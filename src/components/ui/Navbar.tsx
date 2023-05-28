import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { UIContext } from "@/context";

export const Navbar = () => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext(UIContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTearm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" style={{ textDecoration: "none" }}>
          <Link component="span" display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
        >
          <NextLink href="/category/men" style={{ textDecoration: "none" }}>
            <Link component={"span"}>
              <Button color={asPath === "/category/men" ? "primary" : "info"}>
                Men
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" style={{ textDecoration: "none" }}>
            <Link component={"span"}>
              <Button color={asPath === "/category/women" ? "primary" : "info"}>
                Women
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" style={{ textDecoration: "none" }}>
            <Link component={"span"}>
              <Button color={asPath === "/category/kid" ? "primary" : "info"}>
                Kid
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: "none", sm: "flex" } }}
            autoFocus
            value={searchTerm}
            onChange={(event) => setSearchTerm(event?.target.value)}
            onKeyDown={(event) => event.key === "Enter" && onSearchTearm()}
            type="text"
            placeholder="Search..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle search input"
                  onClick={() => setIsSearchVisible(false)}
                >
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
          >
            <SearchOutlined />
          </IconButton>
        )}

        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlined />
        </IconButton>
        <NextLink href="/cart">
          <Link component={"span"}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={(event) => event.detail !== 0 && toggleSideMenu()}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};
