import { useEffect, useState } from "react";
import "./write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import FormData from "form-data";
import { updateBlogList } from "../../redux/blogSlice.js";

const categories = [
  "SCIENCE",
  "TECHNOLOGY",
  "SPORTS",
  "ENTERTAINMENT",
  "HEALTH",
];

const Write = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("SCIENCE");
  const blogList = useSelector((state) => state.blog.blogList);

  const dispatch = useDispatch();


  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleEditorChange = (content, delta, source, editor) => {
    setContent(content);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setImage(file);
      toast.info("Image Selected");
    } else {
      toast.error("Please select an image file");
    }
  };

  useEffect(() => {
    console.log("Method useEffect()");
    
  }, []);

  // Method to save blog
  const saveBlog = () => {
    console.log("Method saveBlog()");

    if (!title || !content || !category || !image) {
      toast.error("Please fill all fields and select an image.");
      return;
    }

    let formData = new FormData();
    formData.append("Title", title);
    formData.append("Content", content);
    formData.append("Category", category);
    formData.append("Image", image);
    formData.append("UserId", "bdf72754-906e-4cff-81b8-14a2c7a26724"); // Replace with dynamic user ID if needed

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/blogs",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    console.log("Config: ", config);

    axios
      .request(config)
      .then((response) => {
        console.log("Success");
        console.log(response.data);
        if (response.data.success) {
          toast.success("Blog saved successfully");

        } else {
          console.log("Blog save failed:", response.data.message);
          toast.error(response.data.message);
          
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="write">
      <div className="write_content">
        <h1 className="write_title">Create Blog</h1>
        {/*<TextField*/}
        {/*    size='small'*/}
        {/*    className="input"*/}
        {/*    required*/}
        {/*    type="text"*/}
        {/*    id="title" label="Title" variant="outlined"*/}
        {/*/>*/}

        <Autocomplete
          freeSolo
          options={blogList.map((blog) => blog.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              className="input"
              required
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
            />
          )}
        />

        <div className="editor_container">
          <ReactQuill
            className="editor"
            theme="snow"
            value={content}
            onChange={handleEditorChange}
          />
        </div>
      </div>

      <div className="menu">
        <div className="menu_item">
          <h2>Category</h2>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="category"
              name="category"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  value={cat}
                  control={<Radio />}
                  label={cat}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="menu_item">
          <h2>Publish</h2>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            onChange={handleFileChange}
            type="file"
            id="file"
            style={{ display: "none" }}
          />
          <label
            className="file"
            htmlFor="file"
            style={{ color: "blue", cursor: "pointer" }}
          >
            Upload Image
          </label>
          <div className="buttons">
            <Button variant="contained" onClick={saveBlog}>
              Save
            </Button>
            <Button variant="contained" color="secondary">
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
