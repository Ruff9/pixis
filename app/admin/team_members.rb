ActiveAdmin.register TeamMember do
  menu priority: 5
  permit_params :description, :name, :image

  form do |f|
    f.semantic_errors *f.object.errors.keys
    f.inputs do
      f.input :name
      f.input :description
      f.input :image, as: :file
    end
    f.actions
  end
end
