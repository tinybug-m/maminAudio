import axios from "axios";

export const getPostsApi = (category: string) => {
  const url = `https://api.maminaudio.com/wp-json/my/v1/crte/1?tags=${category}`;
  return axios.get(url);
};

export const sendContactForm = async (data) => {
  try {
    const res = await axios.post(
      "https://api.web3forms.com/submit",
      {
        access_key: "e1648523-c1b5-41ed-a8f8-83f7c461a21c",
        name: data.name,
        email: data.email,
        topic: data.topic,
        subject: data.subject,
        description: data.description,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};
