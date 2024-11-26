import React from "react";

export const FilterGroup = ({title, inputType, options}) => {
  return (
    <div className="p-6 bg-white rounded-lg h-fit shadow-sm w-80">
      <h2 className="text-base text-[var(--dark-gray-2)] font-bold mb-4">Filtrar por</h2>
        <div className="border my-3"></div>
      {/* Marcas */}
      <div className="mb-4">
        <h3 className="text-sm text-[var(--dark-gray-2)] font-semibold mb-2">Marca</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0  w-5 h-5 text-[--primary]" />
            <span>Marca 1</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Marca 2</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Marca 3</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Marca 4</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Marca 5</span>
          </label>
        </div>
      </div>

      {/* Categorias */}
      <div className="mb-4">
        <h3 className="text-sm text-[var(--dark-gray-2)] font-semibold mb-2">Categoria</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Categoria 1</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Categoria 2</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Categoria 3</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Categoria 4</span>
          </label>
        </div>
      </div>

      {/* Gêneros */}
      <div className="mb-4">
        <h3 className="text-sm text-[var(--dark-gray-2)] font-semibold mb-2">Gênero</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Masculino</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Feminino</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox rounded-sm focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Unissex</span>
          </label>
        </div>
      </div>

      {/* Estados */}
      <div className="mb-4">
        <h3 className="text-sm text-[var(--dark-gray-2)] font-semibold mb-2">Estado</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="estado" className="form-radio focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Usado</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="estado" className="form-radio focus:ring-0 w-5 h-5 text-[--primary]" />
            <span>Novo</span>
          </label>
        </div>
      </div>
    </div>
  );
};
