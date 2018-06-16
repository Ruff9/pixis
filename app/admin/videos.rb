ActiveAdmin.register Video do
  menu priority: 4
  permit_params :title, :presentation, :vimeo_reference
end
