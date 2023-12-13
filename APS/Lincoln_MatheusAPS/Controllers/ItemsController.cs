#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Lincoln_MatheusAPS.Models;

namespace Lincoln_MatheusAPS.Controllers
{
    public class ItemsController : Controller
    {
        private readonly MyDbContext _context;

        public ItemsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Items
        public async Task<IActionResult> Index()
        {
            if(TempData["SuccessMessage"] !=null)
            {
                ViewBag.SuccessMessage = TempData["SuccessMessage"];
            }
            else if(ViewData["ErrorMessage"] !=null)
            {
                ViewBag.ErrorMessage = TempData["ErrorMessage"];
            }
            var myDbContext = _context.Item.Include(i => i.NotaDeVenda).Include(i => i.Produto);
            return View(await myDbContext.ToListAsync());
        }

        // GET: Items/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var item = await _context.Item
                .Include(i => i.NotaDeVenda)
                .Include(i => i.Produto)
                .FirstOrDefaultAsync(m => m.IdI == id);
            if (item == null)
            {
                return NotFound();
            }

            return View(item);
        }

        // GET: Items/Create
        public IActionResult Create()
        {
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id");
            ViewData["IdPd"] = new SelectList(_context.Produto, "IdPd", "IdPd");
            return View();
        }

        // POST: Items/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("IdI,Preco,Percentual,Quantidade,Id,IdPd")] Item item)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Add(item);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Item criado com sucesso!";
                    return RedirectToAction(nameof(Create));
                }
                catch(Exception ex)
                {
                    Console.WriteLine($"Erro ao criar item: {ex.Message}");
                    TempData["ErrorMessage"] = "Erro ao criar Item.";
                    throw;
                }
            }
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id", item.Id);
            ViewData["IdPd"] = new SelectList(_context.Produto, "IdPd", "IdPd", item.IdPd);
            return View(item);
        }

        // GET: Items/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var item = await _context.Item.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id", item.Id);
            ViewData["IdPd"] = new SelectList(_context.Produto, "IdPd", "IdPd", item.IdPd);
            return View(item);
        }

        // POST: Items/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("IdI,Preco,Percentual,Quantidade,Id,IdPd")] Item item)
        {
            if (id != item.IdI)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(item);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Dados editado com sucesso!";
                    return RedirectToAction(nameof(Edit), new{id});
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ItemExists(item.IdI))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            ViewData["Id"] = new SelectList(_context.NotaDeVenda, "Id", "Id", item.Id);
            ViewData["IdPd"] = new SelectList(_context.Produto, "IdPd", "IdPd", item.IdPd);
            return View(item);
        }

        // GET: Items/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var item = await _context.Item
                .Include(i => i.NotaDeVenda)
                .Include(i => i.Produto)
                .FirstOrDefaultAsync(m => m.IdI == id);
            if (item == null)
            {
                return NotFound();
            }

            return View(item);
        }

        // POST: Items/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var item = await _context.Item.FindAsync(id);
                if (item == null)
                {
                    TempData["ErrorMessage"] = "Item não encontrado.";
                }
                else 
                {
                    _context.Item.Remove(item);
                    await _context.SaveChangesAsync();
            
                    TempData["SuccessMessage"] = "Dados deletado com sucesso!";
                    TempData["DeletedClienteId"] = id;
                }

              return RedirectToAction(nameof(Index));
            }  
            catch(Exception ex)
            {
                TempData["ErrorMessage"] = $"Erro ao deletar dados: {ex.Message}";
                return RedirectToAction(nameof(Index));
            } 
        }

        private bool ItemExists(int id)
        {
            return _context.Item.Any(e => e.IdI == id);
        }
    }
}
