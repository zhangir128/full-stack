interface ImportMetaEnv {
    readonly VITE_IK_URL_ENDPOINT: string;
    //Other environment variables here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }