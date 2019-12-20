const StorageType = {
  AuthInfo: "AUTH_INFO"
};

export const setAuth = info => {
  if (info) {
    localStorage.setItem(StorageType.AuthInfo, JSON.stringify(info));
  } else {
    localStorage.removeItem(StorageType.AuthInfo);
  }
};

export const getAuth = () => {
  const data = localStorage.getItem(StorageType.AuthInfo);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      setAuth();
    }
  }
};
