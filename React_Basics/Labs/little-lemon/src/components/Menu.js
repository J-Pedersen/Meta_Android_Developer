import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [backToTopStyle, setBackToTopStyle] = useState({ bottom: '2rem', display: 'none' });

  useEffect(() => {
    const backToTop = document.getElementById('back-to-top');
    const footer = document.querySelector('footer');

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const footerOffset = footer.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition + windowHeight > footerOffset) {
        const distanceToBottom = scrollPosition + windowHeight - footerOffset;
        setBackToTopStyle({ bottom: `${distanceToBottom + 2}px` });
      } else {
        setBackToTopStyle({ bottom: '2rem' });
      }

      if (scrollPosition > 100) {
        setBackToTopStyle({ ...backToTopStyle, display: 'block' });
      } else {
        setBackToTopStyle({ ...backToTopStyle, display: 'none' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backToTopStyle]);

  const handleBackToTopClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSectionClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 225;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const handleDropdownToggle = () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropdownContent.style.display === 'block') {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const openDropdown = () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropdownContent.style.display = 'block';
    dropbtn.classList.add('focused');
    dropbtn.classList.add('clicked');
  };

  const closeDropdown = () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropdownContent.style.display = 'none';
    dropbtn.classList.remove('focused');
    dropbtn.classList.remove('clicked');
  };

  const handleDocumentClick = (event) => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (!dropdownMenu.contains(event.target)) {
      closeDropdown();
    }
  };

  const handleDocumentKeyDown = (event) => {
    if (event.key === 'Escape' && document.querySelector('.dropdown-content').style.display === 'block') {
      closeDropdown();
    }
  };

  const handleDropdownMouseEnter = () => {
    const dropbtn = document.querySelector('.dropbtn');
    if (!dropbtn.classList.contains('clicked')) {
      openDropdown();
    }
  };

  const handleDropdownMouseLeave = () => {
    const dropbtn = document.querySelector('.dropbtn');
    if (!dropbtn.classList.contains('clicked')) {
      closeDropdown();
    }
  };

  const handleDropdownContentClick = (event) => {
    event.preventDefault();
    closeDropdown();
  };

  return (
    <main>
      {/* ... Your JSX code here ... */}

      <a href="#" id="back-to-top" title="Back to Top" style={backToTopStyle} onClick={handleBackToTopClick}>
        &#9650;<br /><u>TOP</u>
      </a>
    </main>
  );
};

export default Menu;