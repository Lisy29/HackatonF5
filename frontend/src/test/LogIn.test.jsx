import React from 'react'; // Asegúrate de importar React
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import LogIn from "../pages/LogIn"; // Ajusta la ruta según la ubicación de tu componente
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import * as services from '../services/services'; // Importa el módulo de servicios

describe("LogIn Component Tests", () => {
  const mockLogin = vi.spyOn(services, 'login').mockImplementation(() => Promise.resolve({ user: 'testUser' }));

  beforeEach(() => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
    mockLogin.mockClear();
  });

  console.log('\nRunning LogIn Component Tests\n');

  test("renders login title correctly", () => {
    const loginTitle = screen.getByText(/¡Hola de nuevo!/i);
    expect(loginTitle).toBeDefined();
  });

  test("renders input for email", () => {
    const emailInputs = screen.getAllByPlaceholderText(/Correo/i);
    expect(emailInputs).toHaveLength(1);
  });

  test("renders input for password", () => {
    const passwordInputs = screen.getAllByPlaceholderText(/Contraseña/i);
    expect(passwordInputs).toHaveLength(1);
  });

  test("shows error message for invalid email format", () => {
    const emailInput = screen.getAllByPlaceholderText(/Correo/i)[0];
    const passwordInput = screen.getAllByPlaceholderText(/Contraseña/i)[0];
    const submitButtons = screen.getAllByText(/Iniciar sesión/i);

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    fireEvent.click(submitButtons[0]);

    const errorMessage = screen.getByText(/El formato del correo es inválido./i);
    expect(errorMessage).toBeDefined();
  });

  test("shows error message for invalid password format", () => {
    const emailInput = screen.getAllByPlaceholderText(/Correo/i)[0];
    const passwordInput = screen.getAllByPlaceholderText(/Contraseña/i)[0];
    const submitButtons = screen.getAllByText(/Iniciar sesión/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });
    fireEvent.click(submitButtons[0]);

    const errorMessage = screen.getByText(/La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número./i);
    expect(errorMessage).toBeDefined();
  });

  test("calls login function on valid form submission", () => {
    const emailInput = screen.getAllByPlaceholderText(/Correo/i)[0];
    const passwordInput = screen.getAllByPlaceholderText(/Contraseña/i)[0];
    const submitButtons = screen.getAllByText(/Iniciar sesión/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    fireEvent.click(submitButtons[0]);

    expect(mockLogin).toHaveBeenCalledWith("test@example.com", "Password123");
  });

  console.log('\nFinished LogIn Component Tests\n');
});
