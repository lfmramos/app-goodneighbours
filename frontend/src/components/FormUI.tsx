"use client";

import React, { useState, useRef } from "react";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation"; // Correct import for Next.js router
import { toast } from 'sonner'; // Import toast from sonner
import './FormUI.css'; // Import the CSS file

// Define the Zod schema for the form data
const FormDataSchema = z.object({
  firstName: z.string().nonempty("Por favor, entre com um nome válido"),
  lastName: z.string().nonempty("Por favor, entre com um nome válido"),
  NIF: z.string().nonempty("Por favor, entre com um NIF válido"),
  CC: z.string().nonempty("Por favor, entre com um número válido"),
  birthday: z.string().nonempty("Por favor, entre com uma data válida"),
  email: z.string().email("Por favor, entre com um email válido"),
  phone: z.string().nonempty("Por favor, entre com um número válido"),
  address: z.string().nonempty("Por favor, entre com uma morada válida"),
  city: z.string().nonempty("Por favor, entre com uma cidade válida"),
  neighbourhood: z.string().nonempty("Por favor, entre com uma freguesia válida"),
  zipcode: z.string().nonempty("Por favor, entre com um código postal válido"),
  image: z.string().nonempty("Por favor, tire uma selfie"),
});

const FormUI: React.FC = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraOn, setCameraOn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    if (cameraOn) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (video && canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = canvas.toDataURL("image/png");
          setFormData({
            ...formData,
            image: imageData,
          });
        }
      }
      setCameraOn(false);
    } else {
      setCameraOn(true);
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Convert birthday to Date object
      const updatedFormData = {
        ...formData,
        birthday: new Date(formData.birthday),
      };

      // Log form data before validation
      console.log("Form Data:", updatedFormData);

      // Validate form data
      FormDataSchema.parse(updatedFormData);

      // Send data to the backend API
      await axios.post("/api/volunteers", updatedFormData);

      toast.success("Dados enviados com sucesso!");
      router.push("/success"); // Redirect to success page
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Log Zod validation errors in a readable format
        console.error("Validation Errors:", error.errors);
        error.errors.forEach((err) => {
          console.error(`Field: ${err.path.join('.')}, Issue: ${err.message}`);
        });
        toast.error("Erro ao enviar os dados. Por favor, verifique os campos e tente novamente.");
      } else {
        toast.error("Erro ao enviar os dados. Por favor, tente novamente.");
        console.error(error);
      }
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-title">Formulário</h1>
        <Form onSubmit={handleSubmit}>
          <div className="form-row">
            <Input name="firstName" label="Primeiro Nome" required onChange={handleChange} className="half-width" />
            <Input name="lastName" label="Apelido" required onChange={handleChange} className="half-width" />
          </div>
          <div className="form-row">
            <Input name="NIF" label="NIF" required onChange={handleChange} className="third-width" />
            <Input name="CC" label="CC" required onChange={handleChange} className="third-width" />
            <Input name="birthday" label="Data de Nascimento" required onChange={handleChange} className="third-width" />
          </div>
          <div className="form-row">
            <Input name="email" label="Email" required onChange={handleChange} className="half-width" />
            <Input name="phone" label="Telefone" required onChange={handleChange} className="half-width" />
          </div>
          <div className="form-row">
            <Input name="address" label="Morada" required onChange={handleChange} className="half-width" />
            <Input name="neighbourhood" label="Freguesia" required onChange={handleChange} className="half-width" />
          </div>
          <div className="form-row">
            <Input name="city" label="Cidade" required onChange={handleChange} className="half-width" />
            <Input name="zipcode" label="Código Postal" required onChange={handleChange} className="half-width" />
          </div>
          <div className="form-row">
            <Button color="secondary" onPress={handleButtonClick} className="mt-2 half-width">
              {cameraOn ? "Capturar Foto" : "Tire uma foto"}
            </Button>
            <Button color="secondary" type="submit" className="mt-2 half-width">
              Enviar
            </Button>
          </div>
          <div className="flex flex-col items-center mt-2">
            <video ref={videoRef} width="320" height="240" style={{ display: cameraOn ? 'block' : 'none' }} autoPlay />
            <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormUI;