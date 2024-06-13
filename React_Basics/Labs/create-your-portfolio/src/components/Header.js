import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    alt: "Email Me",
    title: "Email Me",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    alt: "GitHub",
    title: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    alt: "linkedIn",
    title: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    alt: "Medium",
    title: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    alt: "StackOverflow",
    title: "StackOverflow",
  },
];

const MobileMenu = ({ 
  isOpen, 
  handleClick 
}) => (
  <VStack
    position="fixed"
    top="80px"
    right={0}
    h="maxContent"
    bgColor="#18181b"
    zIndex="2"
    spacing={4}
    alignItems="center"
    p={4}
    display={isOpen ? "flex" : "none"}
    borderBottomLeftRadius= "10px"
  >
    <Box
      as="a"
      href="#projects"
      onClick={handleClick("projects")}
      alt="Projects"
      title="Projects"
      style={{  
        color: "white", 
        textDecoration: "none", 
        padding: "8px",  
      }}
      _hover={{
        outline: "2px solid #fff", 
        padding: "8px", 
        borderRadius: "8px",
      }}
    >
      Projects
    </Box>

    <Box
      as="a"
      href="#contact-me"
      onClick={handleClick("contactme")}
      alt="Contact Me"
      title="Contact Me"
      style={{ 
        color: "white", 
        textDecoration: "none", 
        padding: "8px", 
      }}
      _hover={{
        outline: "2px solid #fff", 
        padding: "8px", 
        borderRadius: "8px",
      }}
    >
      Contact Me
    </Box>
  </VStack>
);

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const boxRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      if (scrollDirection !== "up") {
        setScrollDirection("up");
      }
    } 
    else {
      if (scrollDirection !== "down") {
        setScrollDirection("down");
      }
    } 
    if (scrollDirection === "down" && currentScrollY > 80 && isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    if (scrollDirection === "up" || isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    setPrevScrollY(currentScrollY);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollY, scrollDirection, isMobileMenuOpen]);

  const translateY = scrollDirection === "down" ? "0px" : "-200px";

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${translateY})`}
      transitionProperty="transform"
      transitionDuration=".8s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1"
      ref={boxRef}
    >
      <Box 
        color="white" 
        maxWidth="1280px" 
        margin="0 auto"
      >
        <HStack 
          px={4} 
          py={4} 
          justifyContent="space-between" 
          alignItems="center"
        >
          <HStack 
            spacing={4}
          >
            {socials.map(({ 
              icon, 
              url, 
              alt, 
              title 
            }) => (
              <Box
                as="a"
                key={url}
                href={url}
                target="_blank"
                alt={alt}
                title={title}
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  padding: "8px",
                  transition: "background-color 0.3s, color 0.3s",
                }}
                _hover={{
                  outline: "2px solid #fff",
                }}
              >
                <FontAwesomeIcon 
                  icon={icon} 
                  size="2x" 
                  key={url} 
                />
              </Box>
            ))}
          </HStack>
          <HStack 
            spacing={4} 
            display={{ 
              base: "none", 
              md: "flex" 
            }}>
            <Box
              as="a"
              href="#projects"
              onClick={handleClick("projects")}
              alt="Projects"
              title="Projects"
              style={{
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                padding: "8px",
                transition: "background-color 0.3s, color 0.3s",
              }}
              _hover={{
                outline: "2px solid #fff",
              }}
            >
              Projects
            </Box>
            <Box
              as="a"
              href="#contact-me"
              onClick={handleClick("contactme")}
              alt="Contact Me"
              title="Contact Me"
              style={{
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                padding: "8px",
                transition: "background-color 0.3s, color 0.3s",
              }}
              _hover={{
                outline: "2px solid #fff",
              }}
            >
              Contact Me
            </Box>
          </HStack>
          <IconButton
            icon={
              <FontAwesomeIcon 
                icon={faBars} 
                size="lg" 
              />
            }
            onClick={() => 
              setMobileMenuOpen(!isMobileMenuOpen)
            }
            display={{ base: "block", md: "none" }}
            alignSelf="flex-end"
            _hover={{
              outline: "3px solid #fff",
            }}
          />
        </HStack>
      </Box>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        handleClick={handleClick} 
      />
    </Box>
  );
};

export default Header