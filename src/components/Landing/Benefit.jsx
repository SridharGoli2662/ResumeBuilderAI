import React from "react";
import styled from "styled-components";

export default function Benefit() {
  return (
    <div className="">
      <div className="flex justify-evenly m-12 ">
        <div className="w-32 h-32">
          <img src="ATS F.png" alt="  " />
        </div>
        <div className="w-96">
          <h3>ATS Friendly</h3>
          <p>
          Ensure your resume is optimized to pass through Applicant Tracking Systems (ATS) effortlessly. Our AI Resume Builder follows best practices for formatting, keywords, and layout to increase your chances of getting noticed by recruiters and landing an interview.
          </p>
        </div>
        <div className="w-32 h-32">
          <img src="DF.png" alt="  " />
        </div>
        <div className="w-96">
          <h3>Download Free</h3>
          <p>
          Get your polished, professional resume with no hidden costs. Once your resume is ready, download it in multiple formats, including PDF, at absolutely no charge.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly m-12">
        <div className="w-32 h-32">
          <img src="FC.png" alt="  " />
        </div>
        <div className="w-96">
          <h3>Customizable Fonts</h3>
          <p>
          Make your resume uniquely yours by selecting from a variety of font styles. Customizable fonts allow you to personalize your resume’s look, helping you stand out while maintaining a professional appearance.
          </p>
        </div>
        <div className="w-32 h-32">
          <img src="TR.png" alt="  " />
        </div>
        <div className="w-96">
          <h3>Align your resume based on Job Description</h3>
          <p>
          Tailor your resume to match specific job descriptions. Our AI tool analyzes job requirements and suggests relevant keywords, skills, and project highlights, so you can align your profile closely with what employers are looking for.
          </p>
        </div>
      </div>
    </div>
  );
};
