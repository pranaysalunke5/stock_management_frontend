import React from 'react'

const Demo = () => {
  return (
   <>
   const dataForBackend = {}
const item =[    {
  "Category": "BAKERY PRODUCTS",
  "Sub Category": "BAKERY BASIC GOODS",
  "SKU": "BKP-BKBS-BRTN-003",
  "HSN Code": 19053100,
  "Product Name": "BRITTANIA GOOD DAY BUTTER MRP 10 1 BOX* 72 PCS",
  "Branded/Non Branded": "BRANDED",
  "Brand": "BRITANNIA",
  "Quantity (In Grams/KG/Litre)": 1,
  "UNIT": "BOX",
  "Varient Quantity": 5,
  "Number of Units": 72,
  "MRP": 720,
  "Base Price (Landing Price)": 630,
  "GST (%)": 0.05,
  "CESS %": 0,
  "Margin For GT %": 0.05,
  "Margin For HORECA %": 0.05,
  "PRODUCT STATUS": "ACTIVE",
  "TAG": "case pack"
},
{
  "Category": "BAKERY PRODUCTS",
  "Sub Category": "BAKERY BASIC GOODS",
  "SKU": "BKP-BKBS-BRTN-003",
  "HSN Code": 19053100,
  "Product Name": "BRITTANIA GOOD DAY BUTTER MRP 10 1 BOX* 72 PCS",
  "Branded/Non Branded": "BRANDED",
  "Brand": "BRITANNIA",
  "Quantity (In Grams/KG/Litre)": 1,
  "UNIT": "BOX",
  "Varient Quantity": 10,
  "Number of Units": 72,
  "MRP": 720,
  "Base Price (Landing Price)": 630,
  "GST (%)": 0.05,
  "CESS %": 0,
  "Margin For GT %": 0.04,
  "Margin For HORECA %": 0.04,
  "PRODUCT STATUS": "ACTIVE",
  "TAG": "case pack"
},
{
  "Category": "BAKERY PRODUCTS",
  "Sub Category": "BAKERY BASIC GOODS",
  "SKU": "BKP-BKBS-BRTN-003",
  "HSN Code": 19053100,
  "Product Name": "BRITTANIA GOOD DAY BUTTER MRP 10 1 BOX* 72 PCS",
  "Branded/Non Branded": "BRANDED",
  "Brand": "BRITANNIA",
  "Quantity (In Grams/KG/Litre)": 1,
  "UNIT": "BOX",
  "Varient Quantity": 30,
  "Number of Units": 72,
  "MRP": 720,
  "Base Price (Landing Price)": 630,
  "GST (%)": 0.05,
  "CESS %": 0,
  "Margin For GT %": 0.03,
  "Margin For HORECA %": 0.03,
  "PRODUCT STATUS": "ACTIVE",
  "TAG": "case pack"
},
{
  "Category": "BAKERY PRODUCTS",
  "Sub Category": "BAKERY BASIC GOODS",
  "SKU": "BKP-BKBS-BRTN-003",
  "HSN Code": 19053100,
  "Product Name": "BRITTANIA GOOD DAY BUTTER MRP 10 1 BOX* 72 PCS",
  "Branded/Non Branded": "BRANDED",
  "Brand": "BRITANNIA",
  "Quantity (In Grams/KG/Litre)": 1,
  "UNIT": "BOX",
  "Varient Quantity": 1,
  "Number of Units": 72,
  "MRP": 720,
  "Base Price (Landing Price)": 630,
  "GST (%)": 0.05,
  "CESS %": 0,
  "Margin For GT %": 0.07,
  "Margin For HORECA %": 0.07,
  "PRODUCT STATUS": "ACTIVE",
  "TAG": "case pack"
},]


// const op=


item.forEach((data) => {
  const tempProduct = {
    name: data["Product Name"],
    shortDesc: data["Product Description"],
    mainCat: data["Category"],
    subCat: data["Sub Category"],
    sku: data["SKU"],
    familyCode: data["Family Code"],
    hsn: data["HSN Code"],
    brand: data["Brand"],
    unit: data["Quantity (In Grams/KG/Litre)"],
    totalUnit: data["Number of Units"],
    mrp: data["MRP"],
    basePrice: data["Base Price (Landing Price)"],
    isGst: data["GST (%)"] ? true : false,
    gstInPercent: data["GST (%)"],
    isCess: parseFloat(data["CESS %"]) ? "YES" : "NO",
    cessInPercent: parseFloat(data["CESS %"]),
    isActive: data["PRODUCT STATUS"] == "ACTIVE" ? true : false,
    forGT: data["Margin For GT %"],
    forHoreca: data["Margin For HORECA %"],
    vendorId,
    varientQuantity: data["Varient Quantity"],
    varients: [],
  };
  if (!dataForBackend[tempProduct.sku]) {
    dataForBackend[tempProduct.sku] = {
      ...tempProduct,
      varients: [
        {
          varientQuantity: tempProduct.varientQuantity,
          basePrice: tempProduct.basePrice,
          marginForCustomer: {
            forGT: tempProduct.forGT,
            forHoreca: tempProduct.forHoreca,
          },
        },
      ],
    };
  } else {
    if (tempProduct.varientQuantity != "1") {
      const foundVarient = dataForBackend[
        tempProduct.sku
      ].varients.find(
        (item) => item.varientQuantity == tempProduct.varientQuantity
      );
      const foundIndex = dataForBackend[
        tempProduct.sku
      ].varients.findIndex(
        (item) => item.varientQuantity == tempProduct.varientQuantity
      );
      if (foundVarient) {
        dataForBackend[tempProduct.sku].varients[foundIndex] = {
          varientQuantity: tempProduct.varientQuantity,
          basePrice: tempProduct.basePrice,
          marginForCustomer: {
            forGT: tempProduct.forGT,
            forHoreca: tempProduct.forHoreca,
          },
        };
      } else {
        dataForBackend[tempProduct.sku].varients.push({
          varientQuantity: tempProduct.varientQuantity,
          basePrice: tempProduct.basePrice,
          marginForCustomer: {
            forGT: tempProduct.forGT,
            forHoreca: tempProduct.forHoreca,
          },
        });
      }
    }else{
      dataForBackend[tempProduct.sku].forGT = tempProduct.forGT
      dataForBackend[tempProduct.sku].forHoreca=tempProduct.forHoreca
    }
  }
});
   
   </>
  )
}

export default Demo
