ActiveAdmin.register Video do
  menu priority: 6
  permit_params :title, :presentation, :vimeo_reference
end
