'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500">
      © {new Date().getFullYear()} William Jasso. All rights reserved.
    </footer>
  );
}
