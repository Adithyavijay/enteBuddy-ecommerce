// Validate name
export const validateName = (name) => {
  return name.trim().length > 0;
};

// Validate email
export const validateEmail = (email) => {
  // Regular expression for email validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

// Validate phone number
export const validatePhoneNumber = (phoneNumber) => {
  // Regular expression for phone number validation
  const phoneNumberRegex = /^\d{10}$/;
  return phoneNumberRegex.test(phoneNumber);
};

// Validate pin code
export const validatePinCode = async (pinCode, setError, userId) => {
  // Regular expression for pin code validation (assuming 6 digits)
  try {
    const pinCodeRegex = /^\d{6}$/;
    if (!pinCodeRegex.test(pinCode)) {
      setError({ msg: "Not a valid pincode", error: true });
    } else {
      const response = await fetch(
        `/api/user/checkPostCode/${userId}/${pinCode}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("result : ", result);
        if (result.isAvailable) {
          console.log("valid pincode true ");
          setError({ msg: "Pincode is valid.", error: false });
        } else {
          setError({
            msg: "Delivery is not available at this location",
            error: true,
          });
        }
      }
    }
  } catch (err) {
    console.log("Error in validating pincode : ", err);
  }
};
