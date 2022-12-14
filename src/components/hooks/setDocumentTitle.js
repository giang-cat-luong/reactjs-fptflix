import React, { useEffect, useState } from "react";

const useDocumentTitle = title => {
  const [documentTitle, setDocumentTitle] = useState('');
   useEffect(() => {
    document.title = documentTitle; 
  },[documentTitle]);

  return [documentTitle, setDocumentTitle];
};

export {useDocumentTitle};