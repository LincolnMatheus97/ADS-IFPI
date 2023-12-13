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
    public class ProdutosController : Controller
    {
        private readonly MyDbContext _context;

        public ProdutosController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Produtos
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
            var myDbContext = _context.Produto.Include(p => p.Marca);
            return View(await myDbContext.ToListAsync());
        }

        // GET: Produtos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produto
                .Include(p => p.Marca)
                .FirstOrDefaultAsync(m => m.IdPd == id);
            if (produto == null)
            {
                return NotFound();
            }

            return View(produto);
        }

        // GET: Produtos/Create
        public IActionResult Create()
        {
            ViewData["IdM"] = new SelectList(_context.Marca, "IdM", "IdM");
            return View();
        }

        // POST: Produtos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("IdPd,NomeId,Descricao,Quantidade,Preco,IdM")] Produto produto)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Add(produto);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Produto criado com sucesso!";
                    return RedirectToAction(nameof(Create));
                }
                catch(Exception ex)
                {
                    Console.WriteLine($"Erro ao criar produto: {ex.Message}");
                    TempData["ErrorMessage"] = "Erro ao criar Produto.";
                    throw;
                }
            }
            ViewData["IdM"] = new SelectList(_context.Marca, "IdM", "IdM", produto.IdM);
            return View(produto);
        }

        // GET: Produtos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produto.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }
            ViewData["IdM"] = new SelectList(_context.Marca, "IdM", "IdM", produto.IdM);
            return View(produto);
        }

        // POST: Produtos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("IdPd,NomeId,Descricao,Quantidade,Preco,IdM")] Produto produto)
        {
            if (id != produto.IdPd)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(produto);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Dados editado com sucesso!";
                    return RedirectToAction(nameof(Edit), new{id});
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProdutoExists(produto.IdPd))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            ViewData["IdM"] = new SelectList(_context.Marca, "IdM", "IdM", produto.IdM);
            return View(produto);
        }

        // GET: Produtos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produto
                .Include(p => p.Marca)
                .FirstOrDefaultAsync(m => m.IdPd == id);
            if (produto == null)
            {
                return NotFound();
            }

            return View(produto);
        }

        // POST: Produtos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var produto = await _context.Produto.FindAsync(id);
                if (produto == null)
                {
                    TempData["ErrorMessage"] = "Produto não encontrado.";
                }
                else 
                {
                    _context.Produto.Remove(produto);
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

        private bool ProdutoExists(int id)
        {
            return _context.Produto.Any(e => e.IdPd == id);
        }
    }
}
