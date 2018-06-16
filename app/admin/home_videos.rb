ActiveAdmin.register HomeVideo do
  menu priority: 2
  permit_params :title, :presentation, :vimeo_reference
end
