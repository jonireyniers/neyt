/* empty css                                         */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoY-9ISW.mjs';
import { $ as $$Footer, a as $$Header } from '../../chunks/Footer_BpSRVMVJ.mjs';
import { g as getFurniture } from '../../chunks/supabase_BbAlhgAx.mjs';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.neytfurniture.com");
const $$Manage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Manage;
  const accessToken = Astro2.cookies.get("sb-access-token")?.value;
  const refreshToken = Astro2.cookies.get("sb-refresh-token")?.value;
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/admin/login");
  }
  const supabaseServer = createClient(
    "https://dnshptxwwrungkyuiwhh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2hwdHh3d3J1bmdreXVpd2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODUzNjQsImV4cCI6MjA4MDY2MTM2NH0.-5UUMbHB0nUCH1_fan0X6FGqGnlzft101nfFrNoWI-g"
  );
  const { error: sessionError } = await supabaseServer.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  if (sessionError) {
    return Astro2.redirect("/admin/login");
  }
  const locale = "nl";
  const items = await getFurniture();
  const categoryLabels = {
    "adult-bedrooms": "Volwassen Slaapkamers",
    "youth-bedrooms": "Jeugd Slaapkamers",
    "baby-bedrooms": "Baby Slaapkamers",
    "office": "Kantoren",
    "dining": "Eetkamers"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "robots": "noindex, nofollow", "title": "Manage Furniture", "locale": locale }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main class="section"> <div class="container"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-serif font-bold">Manage Furniture</h1> <div class="flex gap-2"> <a href="/admin/upload" class="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90">\n+ Add New\n</a> <button id="logoutBtn" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">\nLogout\n</button> </div> </div> <div class="bg-white rounded-lg shadow-md overflow-hidden"> <table class="w-full"> <thead class="bg-gray-50 border-b"> <tr> <th class="text-left p-4">Image</th> <th class="text-left p-4">Name</th> <th class="text-left p-4">Category</th> <th class="text-left p-4">Actions</th> </tr> </thead> <tbody> ', ` </tbody> </table> </div> </div> </main>  <div id="editModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"> <h2 class="text-2xl font-bold mb-4">Edit Furniture</h2> <form id="editForm" class="space-y-4"> <input type="hidden" id="edit-id"> <div class="grid grid-cols-3 gap-4"> <div> <label for="edit-name-nl" class="block text-sm font-medium mb-1">Naam (NL)*</label> <input id="edit-name-nl" required class="w-full border px-3 py-2 rounded-md"> </div> <div> <label for="edit-name-fr" class="block text-sm font-medium mb-1">Nom (FR)</label> <input id="edit-name-fr" class="w-full border px-3 py-2 rounded-md"> </div> <div> <label for="edit-name-en" class="block text-sm font-medium mb-1">Name (EN)</label> <input id="edit-name-en" class="w-full border px-3 py-2 rounded-md"> </div> </div> <div> <label for="edit-featured-order" class="block text-sm font-medium mb-1">
Home pagina positie (optioneel)
</label> <select id="edit-featured-order" class="w-full border px-3 py-2 rounded-md"> <option value="">Niet op home pagina</option> <option value="1">Positie 1 (eerste)</option> <option value="2">Positie 2</option> <option value="3">Positie 3</option> <option value="4">Positie 4</option> <option value="5">Positie 5</option> <option value="6">Positie 6 (laatste)</option> </select> <p class="text-xs text-gray-500 mt-1">Kies op welke positie dit meubelstuk op de home pagina moet staan (1-6)</p> </div> <div> <label class="block text-sm font-medium mb-2">Categories*</label> <div id="edit-categories" class="space-y-2 border rounded-md p-3"> <label class="flex items-center gap-2"> <input type="checkbox" value="adult-bedrooms" class="edit-category-checkbox rounded"> <span class="text-sm">Volwassen Slaapkamers</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="youth-bedrooms" class="edit-category-checkbox rounded"> <span class="text-sm">Jeugd Slaapkamers</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="baby-bedrooms" class="edit-category-checkbox rounded"> <span class="text-sm">Baby Slaapkamers</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="office" class="edit-category-checkbox rounded"> <span class="text-sm">Kantoren</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="dining" class="edit-category-checkbox rounded"> <span class="text-sm">Eetkamers</span> </label> </div> </div> <!-- Current Images --> <div> <label class="block text-sm font-medium mb-2">Huidige foto's</label> <div id="current-images" class="grid grid-cols-3 gap-2 mb-2"></div> </div> <!-- Featured Images per Category --> <div id="featured-images-section" class="hidden"> <label class="block text-sm font-medium mb-2">Hoofdfoto per categorie</label> <div id="featured-images-container" class="space-y-3 border rounded-md p-3"> <!-- Will be populated dynamically based on selected categories --> </div> <p class="text-xs text-gray-500 mt-1">Selecteer welke foto eerst moet verschijnen in elke categorie</p> </div> <!-- Add/Replace Images --> <div> <label for="edit-images" class="block text-sm font-medium mb-1">
Nieuwe foto's toevoegen
</label> <input id="edit-images" type="file" accept="image/*" multiple class="w-full border px-3 py-2 rounded-md"> <p class="text-xs text-gray-500 mt-1">Selecteer meerdere foto's om toe te voegen</p> </div> <!-- Current PDFs --> <div> <label class="block text-sm font-medium mb-2">Huidige PDF's</label> <div id="current-pdfs" class="mb-2 space-y-2"></div> </div> <!-- Add PDFs --> <div> <label for="edit-pdfs" class="block text-sm font-medium mb-1">
Nieuwe PDF's toevoegen
</label> <input id="edit-pdfs" type="file" accept=".pdf" multiple class="w-full border px-3 py-2 rounded-md"> <p class="text-xs text-gray-500 mt-1">Houd Ctrl/Cmd ingedrukt om meerdere PDF's te selecteren</p> <div id="edit-pdf-preview" class="mt-2 space-y-2"></div> </div> <div id="edit-status" class="text-sm"></div> <div class="flex gap-2"> <button type="submit" class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
Save Changes
</button> <button type="button" id="cancelEdit" class="flex-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
Cancel
</button> </div> </form> </div> </div> `, ' <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> <script>(function(){', `
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

    // Check if user is logged in
    (async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      
      if (!user) {
        window.location.href = '/admin/login';
        return;
      }
    })();

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        if (!confirm('Are you sure you want to delete this item?')) return;

        const id = btn.getAttribute('data-id');
        const images = JSON.parse(btn.getAttribute('data-images') || '[]');
        const pdfUrls = JSON.parse(btn.getAttribute('data-pdf-urls') || '[]');
        btn.disabled = true;
        btn.textContent = 'Deleting...';
        
        try {
          // Delete from database first
          const { error: dbError } = await supabaseClient
            .from('furniture')
            .delete()
            .eq('id', id);
          
          if (dbError) throw dbError;
          
          // Delete all images from storage
          for (const imageUrl of images) {
            const fileName = imageUrl.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([fileName]);
          }

          // Delete all PDFs if any
          for (const pdfUrl of pdfUrls) {
            const pdfFileName = pdfUrl.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([pdfFileName]);
          }
          
          document.querySelector(\`[data-item-id="\${id}"]\`).remove();
          alert('Item deleted successfully!');
        } catch (err) {
          alert('Error: ' + err.message);
          btn.disabled = false;
          btn.textContent = 'Delete';
        }
      });
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      // Wis de auth cookies
      document.cookie = 'sb-access-token=; path=/; max-age=0';
      document.cookie = 'sb-refresh-token=; path=/; max-age=0';
      window.location.href = '/';
    });

    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const editStatus = document.getElementById('edit-status');

    let currentImages = [];
    let imagesToDelete = [];
    let currentPdfUrls = [];
    let currentPdfLabels = [];
    let pdfsToDelete = [];
    let categoryFeaturedImages = {};

    const categoryLabelsMap = {
      'adult-bedrooms': 'Volwassen Slaapkamers',
      'youth-bedrooms': 'Jeugd Slaapkamers',
      'baby-bedrooms': 'Baby Slaapkamers',
      'office': 'Kantoren',
      'dining': 'Eetkamers'
    };

    function updateFeaturedImagesUI() {
      const selectedCategories = Array.from(
        document.querySelectorAll('.edit-category-checkbox:checked')
      ).map(cb => cb.value);

      const container = document.getElementById('featured-images-container');
      const section = document.getElementById('featured-images-section');

      if (selectedCategories.length === 0 || currentImages.length === 0) {
        section.classList.add('hidden');
        return;
      }

      section.classList.remove('hidden');

      container.innerHTML = selectedCategories.map(catId => {
        const currentFeaturedIndex = categoryFeaturedImages[catId] ?? 0;
        
        return \`
          <div>
            <label class="block text-sm font-semibold mb-2">\${categoryLabelsMap[catId]}</label>
            <div class="grid grid-cols-3 gap-2">
              \${currentImages.map((url, idx) => \`
                <label class="relative cursor-pointer">
                  <input 
                    type="radio" 
                    name="featured-\${catId}" 
                    value="\${idx}"
                    \${currentFeaturedIndex === idx ? 'checked' : ''}
                    class="absolute top-2 left-2 w-4 h-4"
                  />
                  <img src="\${url}" class="w-full h-20 object-cover rounded \${currentFeaturedIndex === idx ? 'ring-2 ring-blue-500' : ''}" />
                  <div class="text-xs text-center mt-1">Foto \${idx + 1}</div>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      }).join('');

      // Add event listeners for radio buttons
      selectedCategories.forEach(catId => {
        document.querySelectorAll(\`input[name="featured-\${catId}"]\`).forEach(radio => {
          radio.addEventListener('change', () => {
            categoryFeaturedImages[catId] = parseInt(radio.value);
            updateFeaturedImagesUI();
          });
        });
      });
    }

    // Edit functionality
    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const nameNl = btn.getAttribute('data-name-nl');
        const nameFr = btn.getAttribute('data-name-fr');
        const nameEn = btn.getAttribute('data-name-en');
        const categories = JSON.parse(btn.getAttribute('data-categories') || '[]');
        const images = JSON.parse(btn.getAttribute('data-images') || '[]');
        const pdfUrls = JSON.parse(btn.getAttribute('data-pdf-urls') || '[]');
        const pdfLabels = JSON.parse(btn.getAttribute('data-pdf-labels') || '[]');
        const featuredOrder = btn.getAttribute('data-featured-order');
        categoryFeaturedImages = JSON.parse(btn.getAttribute('data-category-featured-images') || '{}');

        document.getElementById('edit-id').value = id;
        document.getElementById('edit-name-nl').value = nameNl;
        document.getElementById('edit-name-fr').value = nameFr;
        document.getElementById('edit-name-en').value = nameEn;
        document.getElementById('edit-featured-order').value = featuredOrder || '';
        
        // Check de juiste categorieën
        document.querySelectorAll('.edit-category-checkbox').forEach(checkbox => {
          checkbox.checked = categories.includes(checkbox.value);
        });
        
        currentImages = [...images];
        imagesToDelete = [];
        currentPdfUrls = [...pdfUrls];
        currentPdfLabels = [...pdfLabels];
        pdfsToDelete = [];
        
        // Display current images with delete button
        const currentImagesDiv = document.getElementById('current-images');
        currentImagesDiv.innerHTML = images.map((url, idx) => \`
          <div class="relative">
            <img src="\${url}" class="w-full h-20 object-cover rounded" />
            <button 
              type="button"
              class="delete-image-btn absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs hover:bg-red-700"
              data-index="\${idx}"
              data-url="\${url}"
            >
              ×
            </button>
          </div>
        \`).join('');

        // Display current PDFs
        const currentPdfDiv = document.getElementById('current-pdfs');
        if (pdfUrls.length > 0) {
          currentPdfDiv.innerHTML = pdfUrls.map((url, idx) => \`
            <div class="flex items-center gap-2 bg-gray-100 p-2 rounded" data-pdf-index="\${idx}">
              <span class="text-sm text-gray-500 w-6">\${idx + 1}.</span>
              <input
                type="text"
                class="pdf-label-input flex-1 border px-2 py-1 rounded text-sm bg-white"
                value="\${pdfLabels[idx] || ''}"
                placeholder="Naam voor deze PDF"
              />
              <a href="\${url}" target="_blank" class="text-blue-600 hover:underline text-sm shrink-0">
                📄
              </a>
              <button 
                type="button"
                class="delete-pdf-btn text-red-600 hover:text-red-700 text-sm shrink-0"
                data-index="\${idx}"
                data-url="\${url}"
              >
                ✕
              </button>
            </div>
          \`).join('');
          
          currentPdfDiv.querySelectorAll('.delete-pdf-btn').forEach(delBtn => {
            delBtn.addEventListener('click', () => {
              const idx = parseInt(delBtn.getAttribute('data-index'));
              const url = delBtn.getAttribute('data-url');
              currentPdfUrls.splice(idx, 1);
              currentPdfLabels.splice(idx, 1);
              pdfsToDelete.push(url);
              delBtn.closest('div').remove();
              if (currentPdfUrls.length === 0) {
                currentPdfDiv.innerHTML = '<p class="text-sm text-gray-500">Geen PDF\\'s</p>';
              }
            });
          });
        } else {
          currentPdfDiv.innerHTML = '<p class="text-sm text-gray-500">Geen PDF\\'s</p>';
        }

        // Add delete image handlers
        currentImagesDiv.querySelectorAll('.delete-image-btn').forEach(delBtn => {
          delBtn.addEventListener('click', () => {
            const idx = parseInt(delBtn.getAttribute('data-index'));
            const url = delBtn.getAttribute('data-url');
            currentImages.splice(idx, 1);
            imagesToDelete.push(url);
            delBtn.closest('div').remove();
            
            // Update featured images indices
            Object.keys(categoryFeaturedImages).forEach(catId => {
              if (categoryFeaturedImages[catId] >= idx) {
                categoryFeaturedImages[catId] = Math.max(0, categoryFeaturedImages[catId] - 1);
              }
            });
            
            updateFeaturedImagesUI();
          });
        });

        // Add category checkbox listeners
        document.querySelectorAll('.edit-category-checkbox').forEach(checkbox => {
          checkbox.addEventListener('change', updateFeaturedImagesUI);
        });

        updateFeaturedImagesUI();

        editModal.classList.remove('hidden');
      });
    });

    // Show label inputs when new PDFs are selected in edit modal
    document.getElementById('edit-pdfs').addEventListener('change', () => {
      const files = document.getElementById('edit-pdfs').files;
      const preview = document.getElementById('edit-pdf-preview');
      preview.innerHTML = '';
      if (files.length === 0) return;
      
      for (let i = 0; i < files.length; i++) {
        const nameWithoutExt = files[i].name.replace(/\\.[^/.]+$/, '');
        const div = document.createElement('div');
        div.className = 'flex items-center gap-2 bg-gray-50 p-2 rounded';
        div.innerHTML = \`
          <span class="text-sm text-gray-500 shrink-0">nieuw \${i + 1}.</span>
          <input
            type="text"
            class="new-pdf-label flex-1 border px-2 py-1 rounded text-sm"
            placeholder="Naam voor deze PDF (optioneel)"
            value="\${nameWithoutExt}"
          />
        \`;
        preview.appendChild(div);
      }
    });

    // Close modal
    document.getElementById('cancelEdit').addEventListener('click', () => {
      editModal.classList.add('hidden');
      editForm.reset();
      document.getElementById('edit-pdf-preview').innerHTML = '';
    });

    // Submit edit
    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      editStatus.textContent = 'Saving...';
      editStatus.className = 'text-sm text-blue-600';

      const id = document.getElementById('edit-id').value;
      const nameNl = document.getElementById('edit-name-nl').value;
      const nameFr = document.getElementById('edit-name-fr').value || null;
      const nameEn = document.getElementById('edit-name-en').value || null;
      
      // Verzamel geselecteerde categorieën
      const selectedCategories = Array.from(
        document.querySelectorAll('.edit-category-checkbox:checked')
      ).map(cb => cb.value);

      if (selectedCategories.length === 0) {
        editStatus.textContent = 'Selecteer minimaal één categorie';
        editStatus.className = 'text-sm text-red-600';
        return;
      }

      const newFiles = document.getElementById('edit-images').files;
      const newPdfFiles = document.getElementById('edit-pdfs').files;

      try {
        const imageUrls = [...currentImages];

        // Upload new images
        if (newFiles.length > 0) {
          editStatus.textContent = \`Uploading \${newFiles.length} new image(s)...\`;
          
          for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i];
            const fileName = \`\${Date.now()}-\${i}-\${file.name}\`;
            
            const { error: uploadError } = await supabaseClient.storage
              .from('furniture')
              .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: urlData } = supabaseClient.storage
              .from('furniture')
              .getPublicUrl(fileName);

            imageUrls.push(urlData.publicUrl);
          }
        }

        // Delete removed images from storage
        if (imagesToDelete.length > 0) {
          editStatus.textContent = 'Removing old images...';
          
          for (const url of imagesToDelete) {
            const fileName = url.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([fileName]);
          }
        }

        // Handle PDFs
        let pdfUrls = [...currentPdfUrls];
        let pdfLabels = [...currentPdfLabels];

        // Collect updated labels from inputs
        document.querySelectorAll('.pdf-label-input').forEach((input, idx) => {
          if (idx < pdfLabels.length) {
            pdfLabels[idx] = input.value.trim();
          }
        });

        // Delete removed PDFs from storage
        if (pdfsToDelete.length > 0) {
          editStatus.textContent = 'Removing old PDFs...';
          for (const url of pdfsToDelete) {
            const fileName = url.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([fileName]);
          }
        }

        // Upload new PDFs
        if (newPdfFiles.length > 0) {
          editStatus.textContent = \`Uploading \${newPdfFiles.length} new PDF(s)...\`;
          
          const newLabelInputs = document.querySelectorAll('.new-pdf-label');
          
          for (let i = 0; i < newPdfFiles.length; i++) {
            const file = newPdfFiles[i];
            const pdfFileName = \`\${Date.now()}-\${i}-\${file.name}\`;
            const { error: pdfError } = await supabaseClient.storage
              .from('furniture')
              .upload(pdfFileName, file);

            if (pdfError) throw pdfError;

            const { data: pdfUrlData } = supabaseClient.storage
              .from('furniture')
              .getPublicUrl(pdfFileName);

            pdfUrls.push(pdfUrlData.publicUrl);
            pdfLabels.push(newLabelInputs[i]?.value?.trim() || '');
          }
        }

        // Update database
        editStatus.textContent = 'Updating database...';
        
        // Clean up category_featured_images - only keep selected categories
        const cleanedFeaturedImages = {};
        selectedCategories.forEach(catId => {
          if (categoryFeaturedImages[catId] !== undefined) {
            cleanedFeaturedImages[catId] = categoryFeaturedImages[catId];
          }
        });

        // Get featured order value
        const featuredOrderValue = document.getElementById('edit-featured-order').value;
        const featuredOrder = featuredOrderValue ? parseInt(featuredOrderValue) : null;
        
        const { error } = await supabaseClient
          .from('furniture')
          .update({
            name_nl: nameNl,
            name_fr: nameFr,
            name_en: nameEn,
            category: selectedCategories[0], // Eerste voor backwards compatibility
            categories: selectedCategories, // Alle categorieën
            images: imageUrls,
            image_url: imageUrls[0] || null,
            category_featured_images: cleanedFeaturedImages,
            featured_order: featuredOrder,
            pdf_url: pdfUrls[0] || null,
            pdf_urls: pdfUrls,
            pdf_labels_nl: pdfLabels
          })
          .eq('id', id);

        if (error) throw error;

        editStatus.textContent = 'Saved! Refreshing...';
        editStatus.className = 'text-sm text-green-600';
        
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        editStatus.textContent = \`Error: \${err.message}\`;
        editStatus.className = 'text-sm text-red-600';
      }
    });
  })();</script> `], [" ", " ", '<main class="section"> <div class="container"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-serif font-bold">Manage Furniture</h1> <div class="flex gap-2"> <a href="/admin/upload" class="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90">\n+ Add New\n</a> <button id="logoutBtn" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">\nLogout\n</button> </div> </div> <div class="bg-white rounded-lg shadow-md overflow-hidden"> <table class="w-full"> <thead class="bg-gray-50 border-b"> <tr> <th class="text-left p-4">Image</th> <th class="text-left p-4">Name</th> <th class="text-left p-4">Category</th> <th class="text-left p-4">Actions</th> </tr> </thead> <tbody> ', ` </tbody> </table> </div> </div> </main>  <div id="editModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"> <h2 class="text-2xl font-bold mb-4">Edit Furniture</h2> <form id="editForm" class="space-y-4"> <input type="hidden" id="edit-id"> <div class="grid grid-cols-3 gap-4"> <div> <label for="edit-name-nl" class="block text-sm font-medium mb-1">Naam (NL)*</label> <input id="edit-name-nl" required class="w-full border px-3 py-2 rounded-md"> </div> <div> <label for="edit-name-fr" class="block text-sm font-medium mb-1">Nom (FR)</label> <input id="edit-name-fr" class="w-full border px-3 py-2 rounded-md"> </div> <div> <label for="edit-name-en" class="block text-sm font-medium mb-1">Name (EN)</label> <input id="edit-name-en" class="w-full border px-3 py-2 rounded-md"> </div> </div> <div> <label for="edit-featured-order" class="block text-sm font-medium mb-1">
Home pagina positie (optioneel)
</label> <select id="edit-featured-order" class="w-full border px-3 py-2 rounded-md"> <option value="">Niet op home pagina</option> <option value="1">Positie 1 (eerste)</option> <option value="2">Positie 2</option> <option value="3">Positie 3</option> <option value="4">Positie 4</option> <option value="5">Positie 5</option> <option value="6">Positie 6 (laatste)</option> </select> <p class="text-xs text-gray-500 mt-1">Kies op welke positie dit meubelstuk op de home pagina moet staan (1-6)</p> </div> <div> <label class="block text-sm font-medium mb-2">Categories*</label> <div id="edit-categories" class="space-y-2 border rounded-md p-3"> <label class="flex items-center gap-2"> <input type="checkbox" value="adult-bedrooms" class="edit-category-checkbox rounded"> <span class="text-sm">Volwassen Slaapkamers</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="youth-bedrooms" class="edit-category-checkbox rounded"> <span class="text-sm">Jeugd Slaapkamers</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="baby-bedrooms" class="edit-category-checkbox rounded"> <span class="text-sm">Baby Slaapkamers</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="office" class="edit-category-checkbox rounded"> <span class="text-sm">Kantoren</span> </label> <label class="flex items-center gap-2"> <input type="checkbox" value="dining" class="edit-category-checkbox rounded"> <span class="text-sm">Eetkamers</span> </label> </div> </div> <!-- Current Images --> <div> <label class="block text-sm font-medium mb-2">Huidige foto's</label> <div id="current-images" class="grid grid-cols-3 gap-2 mb-2"></div> </div> <!-- Featured Images per Category --> <div id="featured-images-section" class="hidden"> <label class="block text-sm font-medium mb-2">Hoofdfoto per categorie</label> <div id="featured-images-container" class="space-y-3 border rounded-md p-3"> <!-- Will be populated dynamically based on selected categories --> </div> <p class="text-xs text-gray-500 mt-1">Selecteer welke foto eerst moet verschijnen in elke categorie</p> </div> <!-- Add/Replace Images --> <div> <label for="edit-images" class="block text-sm font-medium mb-1">
Nieuwe foto's toevoegen
</label> <input id="edit-images" type="file" accept="image/*" multiple class="w-full border px-3 py-2 rounded-md"> <p class="text-xs text-gray-500 mt-1">Selecteer meerdere foto's om toe te voegen</p> </div> <!-- Current PDFs --> <div> <label class="block text-sm font-medium mb-2">Huidige PDF's</label> <div id="current-pdfs" class="mb-2 space-y-2"></div> </div> <!-- Add PDFs --> <div> <label for="edit-pdfs" class="block text-sm font-medium mb-1">
Nieuwe PDF's toevoegen
</label> <input id="edit-pdfs" type="file" accept=".pdf" multiple class="w-full border px-3 py-2 rounded-md"> <p class="text-xs text-gray-500 mt-1">Houd Ctrl/Cmd ingedrukt om meerdere PDF's te selecteren</p> <div id="edit-pdf-preview" class="mt-2 space-y-2"></div> </div> <div id="edit-status" class="text-sm"></div> <div class="flex gap-2"> <button type="submit" class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
Save Changes
</button> <button type="button" id="cancelEdit" class="flex-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
Cancel
</button> </div> </form> </div> </div> `, ' <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> <script>(function(){', `
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

    // Check if user is logged in
    (async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      
      if (!user) {
        window.location.href = '/admin/login';
        return;
      }
    })();

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        if (!confirm('Are you sure you want to delete this item?')) return;

        const id = btn.getAttribute('data-id');
        const images = JSON.parse(btn.getAttribute('data-images') || '[]');
        const pdfUrls = JSON.parse(btn.getAttribute('data-pdf-urls') || '[]');
        btn.disabled = true;
        btn.textContent = 'Deleting...';
        
        try {
          // Delete from database first
          const { error: dbError } = await supabaseClient
            .from('furniture')
            .delete()
            .eq('id', id);
          
          if (dbError) throw dbError;
          
          // Delete all images from storage
          for (const imageUrl of images) {
            const fileName = imageUrl.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([fileName]);
          }

          // Delete all PDFs if any
          for (const pdfUrl of pdfUrls) {
            const pdfFileName = pdfUrl.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([pdfFileName]);
          }
          
          document.querySelector(\\\`[data-item-id="\\\${id}"]\\\`).remove();
          alert('Item deleted successfully!');
        } catch (err) {
          alert('Error: ' + err.message);
          btn.disabled = false;
          btn.textContent = 'Delete';
        }
      });
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      // Wis de auth cookies
      document.cookie = 'sb-access-token=; path=/; max-age=0';
      document.cookie = 'sb-refresh-token=; path=/; max-age=0';
      window.location.href = '/';
    });

    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const editStatus = document.getElementById('edit-status');

    let currentImages = [];
    let imagesToDelete = [];
    let currentPdfUrls = [];
    let currentPdfLabels = [];
    let pdfsToDelete = [];
    let categoryFeaturedImages = {};

    const categoryLabelsMap = {
      'adult-bedrooms': 'Volwassen Slaapkamers',
      'youth-bedrooms': 'Jeugd Slaapkamers',
      'baby-bedrooms': 'Baby Slaapkamers',
      'office': 'Kantoren',
      'dining': 'Eetkamers'
    };

    function updateFeaturedImagesUI() {
      const selectedCategories = Array.from(
        document.querySelectorAll('.edit-category-checkbox:checked')
      ).map(cb => cb.value);

      const container = document.getElementById('featured-images-container');
      const section = document.getElementById('featured-images-section');

      if (selectedCategories.length === 0 || currentImages.length === 0) {
        section.classList.add('hidden');
        return;
      }

      section.classList.remove('hidden');

      container.innerHTML = selectedCategories.map(catId => {
        const currentFeaturedIndex = categoryFeaturedImages[catId] ?? 0;
        
        return \\\`
          <div>
            <label class="block text-sm font-semibold mb-2">\\\${categoryLabelsMap[catId]}</label>
            <div class="grid grid-cols-3 gap-2">
              \\\${currentImages.map((url, idx) => \\\`
                <label class="relative cursor-pointer">
                  <input 
                    type="radio" 
                    name="featured-\\\${catId}" 
                    value="\\\${idx}"
                    \\\${currentFeaturedIndex === idx ? 'checked' : ''}
                    class="absolute top-2 left-2 w-4 h-4"
                  />
                  <img src="\\\${url}" class="w-full h-20 object-cover rounded \\\${currentFeaturedIndex === idx ? 'ring-2 ring-blue-500' : ''}" />
                  <div class="text-xs text-center mt-1">Foto \\\${idx + 1}</div>
                </label>
              \\\`).join('')}
            </div>
          </div>
        \\\`;
      }).join('');

      // Add event listeners for radio buttons
      selectedCategories.forEach(catId => {
        document.querySelectorAll(\\\`input[name="featured-\\\${catId}"]\\\`).forEach(radio => {
          radio.addEventListener('change', () => {
            categoryFeaturedImages[catId] = parseInt(radio.value);
            updateFeaturedImagesUI();
          });
        });
      });
    }

    // Edit functionality
    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const nameNl = btn.getAttribute('data-name-nl');
        const nameFr = btn.getAttribute('data-name-fr');
        const nameEn = btn.getAttribute('data-name-en');
        const categories = JSON.parse(btn.getAttribute('data-categories') || '[]');
        const images = JSON.parse(btn.getAttribute('data-images') || '[]');
        const pdfUrls = JSON.parse(btn.getAttribute('data-pdf-urls') || '[]');
        const pdfLabels = JSON.parse(btn.getAttribute('data-pdf-labels') || '[]');
        const featuredOrder = btn.getAttribute('data-featured-order');
        categoryFeaturedImages = JSON.parse(btn.getAttribute('data-category-featured-images') || '{}');

        document.getElementById('edit-id').value = id;
        document.getElementById('edit-name-nl').value = nameNl;
        document.getElementById('edit-name-fr').value = nameFr;
        document.getElementById('edit-name-en').value = nameEn;
        document.getElementById('edit-featured-order').value = featuredOrder || '';
        
        // Check de juiste categorieën
        document.querySelectorAll('.edit-category-checkbox').forEach(checkbox => {
          checkbox.checked = categories.includes(checkbox.value);
        });
        
        currentImages = [...images];
        imagesToDelete = [];
        currentPdfUrls = [...pdfUrls];
        currentPdfLabels = [...pdfLabels];
        pdfsToDelete = [];
        
        // Display current images with delete button
        const currentImagesDiv = document.getElementById('current-images');
        currentImagesDiv.innerHTML = images.map((url, idx) => \\\`
          <div class="relative">
            <img src="\\\${url}" class="w-full h-20 object-cover rounded" />
            <button 
              type="button"
              class="delete-image-btn absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs hover:bg-red-700"
              data-index="\\\${idx}"
              data-url="\\\${url}"
            >
              ×
            </button>
          </div>
        \\\`).join('');

        // Display current PDFs
        const currentPdfDiv = document.getElementById('current-pdfs');
        if (pdfUrls.length > 0) {
          currentPdfDiv.innerHTML = pdfUrls.map((url, idx) => \\\`
            <div class="flex items-center gap-2 bg-gray-100 p-2 rounded" data-pdf-index="\\\${idx}">
              <span class="text-sm text-gray-500 w-6">\\\${idx + 1}.</span>
              <input
                type="text"
                class="pdf-label-input flex-1 border px-2 py-1 rounded text-sm bg-white"
                value="\\\${pdfLabels[idx] || ''}"
                placeholder="Naam voor deze PDF"
              />
              <a href="\\\${url}" target="_blank" class="text-blue-600 hover:underline text-sm shrink-0">
                📄
              </a>
              <button 
                type="button"
                class="delete-pdf-btn text-red-600 hover:text-red-700 text-sm shrink-0"
                data-index="\\\${idx}"
                data-url="\\\${url}"
              >
                ✕
              </button>
            </div>
          \\\`).join('');
          
          currentPdfDiv.querySelectorAll('.delete-pdf-btn').forEach(delBtn => {
            delBtn.addEventListener('click', () => {
              const idx = parseInt(delBtn.getAttribute('data-index'));
              const url = delBtn.getAttribute('data-url');
              currentPdfUrls.splice(idx, 1);
              currentPdfLabels.splice(idx, 1);
              pdfsToDelete.push(url);
              delBtn.closest('div').remove();
              if (currentPdfUrls.length === 0) {
                currentPdfDiv.innerHTML = '<p class="text-sm text-gray-500">Geen PDF\\\\'s</p>';
              }
            });
          });
        } else {
          currentPdfDiv.innerHTML = '<p class="text-sm text-gray-500">Geen PDF\\\\'s</p>';
        }

        // Add delete image handlers
        currentImagesDiv.querySelectorAll('.delete-image-btn').forEach(delBtn => {
          delBtn.addEventListener('click', () => {
            const idx = parseInt(delBtn.getAttribute('data-index'));
            const url = delBtn.getAttribute('data-url');
            currentImages.splice(idx, 1);
            imagesToDelete.push(url);
            delBtn.closest('div').remove();
            
            // Update featured images indices
            Object.keys(categoryFeaturedImages).forEach(catId => {
              if (categoryFeaturedImages[catId] >= idx) {
                categoryFeaturedImages[catId] = Math.max(0, categoryFeaturedImages[catId] - 1);
              }
            });
            
            updateFeaturedImagesUI();
          });
        });

        // Add category checkbox listeners
        document.querySelectorAll('.edit-category-checkbox').forEach(checkbox => {
          checkbox.addEventListener('change', updateFeaturedImagesUI);
        });

        updateFeaturedImagesUI();

        editModal.classList.remove('hidden');
      });
    });

    // Show label inputs when new PDFs are selected in edit modal
    document.getElementById('edit-pdfs').addEventListener('change', () => {
      const files = document.getElementById('edit-pdfs').files;
      const preview = document.getElementById('edit-pdf-preview');
      preview.innerHTML = '';
      if (files.length === 0) return;
      
      for (let i = 0; i < files.length; i++) {
        const nameWithoutExt = files[i].name.replace(/\\\\.[^/.]+$/, '');
        const div = document.createElement('div');
        div.className = 'flex items-center gap-2 bg-gray-50 p-2 rounded';
        div.innerHTML = \\\`
          <span class="text-sm text-gray-500 shrink-0">nieuw \\\${i + 1}.</span>
          <input
            type="text"
            class="new-pdf-label flex-1 border px-2 py-1 rounded text-sm"
            placeholder="Naam voor deze PDF (optioneel)"
            value="\\\${nameWithoutExt}"
          />
        \\\`;
        preview.appendChild(div);
      }
    });

    // Close modal
    document.getElementById('cancelEdit').addEventListener('click', () => {
      editModal.classList.add('hidden');
      editForm.reset();
      document.getElementById('edit-pdf-preview').innerHTML = '';
    });

    // Submit edit
    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      editStatus.textContent = 'Saving...';
      editStatus.className = 'text-sm text-blue-600';

      const id = document.getElementById('edit-id').value;
      const nameNl = document.getElementById('edit-name-nl').value;
      const nameFr = document.getElementById('edit-name-fr').value || null;
      const nameEn = document.getElementById('edit-name-en').value || null;
      
      // Verzamel geselecteerde categorieën
      const selectedCategories = Array.from(
        document.querySelectorAll('.edit-category-checkbox:checked')
      ).map(cb => cb.value);

      if (selectedCategories.length === 0) {
        editStatus.textContent = 'Selecteer minimaal één categorie';
        editStatus.className = 'text-sm text-red-600';
        return;
      }

      const newFiles = document.getElementById('edit-images').files;
      const newPdfFiles = document.getElementById('edit-pdfs').files;

      try {
        const imageUrls = [...currentImages];

        // Upload new images
        if (newFiles.length > 0) {
          editStatus.textContent = \\\`Uploading \\\${newFiles.length} new image(s)...\\\`;
          
          for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i];
            const fileName = \\\`\\\${Date.now()}-\\\${i}-\\\${file.name}\\\`;
            
            const { error: uploadError } = await supabaseClient.storage
              .from('furniture')
              .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: urlData } = supabaseClient.storage
              .from('furniture')
              .getPublicUrl(fileName);

            imageUrls.push(urlData.publicUrl);
          }
        }

        // Delete removed images from storage
        if (imagesToDelete.length > 0) {
          editStatus.textContent = 'Removing old images...';
          
          for (const url of imagesToDelete) {
            const fileName = url.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([fileName]);
          }
        }

        // Handle PDFs
        let pdfUrls = [...currentPdfUrls];
        let pdfLabels = [...currentPdfLabels];

        // Collect updated labels from inputs
        document.querySelectorAll('.pdf-label-input').forEach((input, idx) => {
          if (idx < pdfLabels.length) {
            pdfLabels[idx] = input.value.trim();
          }
        });

        // Delete removed PDFs from storage
        if (pdfsToDelete.length > 0) {
          editStatus.textContent = 'Removing old PDFs...';
          for (const url of pdfsToDelete) {
            const fileName = url.split('/').pop();
            await supabaseClient.storage
              .from('furniture')
              .remove([fileName]);
          }
        }

        // Upload new PDFs
        if (newPdfFiles.length > 0) {
          editStatus.textContent = \\\`Uploading \\\${newPdfFiles.length} new PDF(s)...\\\`;
          
          const newLabelInputs = document.querySelectorAll('.new-pdf-label');
          
          for (let i = 0; i < newPdfFiles.length; i++) {
            const file = newPdfFiles[i];
            const pdfFileName = \\\`\\\${Date.now()}-\\\${i}-\\\${file.name}\\\`;
            const { error: pdfError } = await supabaseClient.storage
              .from('furniture')
              .upload(pdfFileName, file);

            if (pdfError) throw pdfError;

            const { data: pdfUrlData } = supabaseClient.storage
              .from('furniture')
              .getPublicUrl(pdfFileName);

            pdfUrls.push(pdfUrlData.publicUrl);
            pdfLabels.push(newLabelInputs[i]?.value?.trim() || '');
          }
        }

        // Update database
        editStatus.textContent = 'Updating database...';
        
        // Clean up category_featured_images - only keep selected categories
        const cleanedFeaturedImages = {};
        selectedCategories.forEach(catId => {
          if (categoryFeaturedImages[catId] !== undefined) {
            cleanedFeaturedImages[catId] = categoryFeaturedImages[catId];
          }
        });

        // Get featured order value
        const featuredOrderValue = document.getElementById('edit-featured-order').value;
        const featuredOrder = featuredOrderValue ? parseInt(featuredOrderValue) : null;
        
        const { error } = await supabaseClient
          .from('furniture')
          .update({
            name_nl: nameNl,
            name_fr: nameFr,
            name_en: nameEn,
            category: selectedCategories[0], // Eerste voor backwards compatibility
            categories: selectedCategories, // Alle categorieën
            images: imageUrls,
            image_url: imageUrls[0] || null,
            category_featured_images: cleanedFeaturedImages,
            featured_order: featuredOrder,
            pdf_url: pdfUrls[0] || null,
            pdf_urls: pdfUrls,
            pdf_labels_nl: pdfLabels
          })
          .eq('id', id);

        if (error) throw error;

        editStatus.textContent = 'Saved! Refreshing...';
        editStatus.className = 'text-sm text-green-600';
        
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        editStatus.textContent = \\\`Error: \\\${err.message}\\\`;
        editStatus.className = 'text-sm text-red-600';
      }
    });
  })();</script> `])), renderComponent($$result2, "Header", $$Header, { "locale": locale }), maybeRenderHead(), items.map((item) => renderTemplate`<tr class="border-b hover:bg-gray-50"${addAttribute(item.id, "data-item-id")}> <td class="p-4"> <img${addAttribute(item.image_url, "src")}${addAttribute(item.name_nl, "alt")} class="w-20 h-20 object-cover rounded"> </td> <td class="p-4"> <div> <div class="font-semibold">${item.name_nl}</div> ${item.name_fr && renderTemplate`<div class="text-sm text-gray-600">${item.name_fr}</div>`} ${item.name_en && renderTemplate`<div class="text-sm text-gray-600">${item.name_en}</div>`} ${item.featured_order && renderTemplate`<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded mt-1">
⭐ Home #${item.featured_order} </span>`} ${(() => {
    const urls = item.pdf_urls || (item.pdf_url ? [item.pdf_url] : []);
    const labels = item.pdf_labels_nl || [];
    return urls.length > 0 ? urls.map((url, i) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" class="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1">
📄 ${labels[i] || `PDF${urls.length > 1 ? ` ${i + 1}` : ""}`} </a>`) : null;
  })()} </div> </td> <td class="p-4"> <span class="px-2 py-1 bg-gray-100 rounded text-sm"> ${categoryLabels[item.category]} </span> </td> <td class="p-4 space-x-2"> <button${addAttribute(item.id, "data-id")}${addAttribute(item.name_nl, "data-name-nl")}${addAttribute(item.name_fr || "", "data-name-fr")}${addAttribute(item.name_en || "", "data-name-en")}${addAttribute(JSON.stringify(item.categories || [item.category]), "data-categories")}${addAttribute(JSON.stringify(item.images || [item.image_url]), "data-images")}${addAttribute(JSON.stringify(item.category_featured_images || {}), "data-category-featured-images")}${addAttribute(item.featured_order || "", "data-featured-order")}${addAttribute(item.pdf_url || "", "data-pdf-url")}${addAttribute(JSON.stringify(item.pdf_urls || (item.pdf_url ? [item.pdf_url] : [])), "data-pdf-urls")}${addAttribute(JSON.stringify(item.pdf_labels_nl || []), "data-pdf-labels")} class="edit-btn px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
Edit
</button> <button${addAttribute(item.id, "data-id")}${addAttribute(item.image_url, "data-image-url")}${addAttribute(JSON.stringify(item.images || [item.image_url]), "data-images")}${addAttribute(JSON.stringify(item.pdf_urls || (item.pdf_url ? [item.pdf_url] : [])), "data-pdf-urls")} class="delete-btn px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
Delete
</button> </td> </tr>`), renderComponent($$result2, "Footer", $$Footer, { "locale": locale }), defineScriptVars({ SUPABASE_URL: "https://dnshptxwwrungkyuiwhh.supabase.co", SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2hwdHh3d3J1bmdreXVpd2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODUzNjQsImV4cCI6MjA4MDY2MTM2NH0.-5UUMbHB0nUCH1_fan0X6FGqGnlzft101nfFrNoWI-g" })) })}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/pages/admin/manage.astro", void 0);
const $$file = "/Users/jonireyniers/prod-neyt/neyt/src/pages/admin/manage.astro";
const $$url = "/admin/manage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Manage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
